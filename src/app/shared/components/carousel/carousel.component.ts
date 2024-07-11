import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { Project, Service } from '@core/index';
import { CtaComponent, IconsImgComponent } from '@shared/index';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CtaComponent, CommonModule, IconsImgComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class CarouselComponent implements OnInit {
  @Input() componentConfig!: CarouselConfig;

  selected = signal<Project | Service | null>(null);
  currentIndex = signal(0);

  ngOnInit(): void {
    if (this.componentConfig?.subjects?.length) {
      this.selected.set(this.componentConfig.subjects[0]);
    }
  }

  selectSubject(title: string, event: MouseEvent) {
    const subject = this.componentConfig.subjects.find(subj => subj.title === title) || null;
    this.selected.set(subject);
    if (subject) {
      this.currentIndex.set(this.componentConfig.subjects.findIndex(subj => subj.title === subject.title));
    }
    this.removeFocusToButtons();
  }

  removeFocusToButtons(): void {
      const buttons = document.querySelectorAll('.buttons');
      buttons.forEach(button => (button as HTMLElement).blur());
  }

  isProject(subject: Project | Service): subject is Project {
    return 'responsibilities' in subject;
  }

  generateId(title: string): string {
    return title.replace(/ /g, '-');
  }

  get selectedItem() {
    return this.selected();
  }

  get visibleItems() {
    const subjects = this.componentConfig.subjects;
    const totalItems = subjects.length;
    const centerIndex = this.currentIndex();
    const halfVisible = Math.floor(5 / 2);
    
    const visibleItems = [];
    for (let i = -halfVisible; i <= halfVisible; i++) {
      const index = (centerIndex + i + totalItems) % totalItems;
      visibleItems.push(subjects[index]);
    }
    
    return visibleItems;
  }

  next() {
    const nextIndex = (this.currentIndex() + 1) % this.componentConfig.subjects.length;
    this.currentIndex.set(nextIndex);
    this.selected.set(this.componentConfig.subjects[nextIndex]);
    this.removeFocusToButtons();
  }

  prev() {
    const prevIndex = (this.currentIndex() - 1 + this.componentConfig.subjects.length) % this.componentConfig.subjects.length;
    this.currentIndex.set(prevIndex);
    this.selected.set(this.componentConfig.subjects[prevIndex]);
    this.removeFocusToButtons();
  }

  getAriaLabel(subject: Project | Service): string {
    const type = this.isProject(subject) ? 'project' : 'service';
    const status = this.selectedItem === subject ? `${subject.title} ${type} - currently selected` : `Go to ${subject.title} ${type}`;
    return `${status}`;
  }
}

export interface CarouselConfig {
  title: string;
  subtitle: string;
  subjects: Project[] | Service[];
}
