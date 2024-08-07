import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { Project, ResponsiveService, Service } from '@core/index';
import { CtaComponent } from '@shared/index';
import { GetIconComponent } from '../get-icon/get-icon.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CtaComponent, CommonModule, GetIconComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class CarouselComponent implements OnInit {
  @Input() componentConfig!: CarouselConfig;

  selected = signal<Project | Service | null>(null);
  currentIndex = signal(0);

  private responsiveService: ResponsiveService = inject(ResponsiveService);
  
  isSmallScreen = computed(() => !!this.responsiveService.mdWidth());
  

  ngOnInit(): void {
    if (this.componentConfig?.subjects?.length) {
      this.selected.set(this.componentConfig.subjects[0]);
    }
  }

  private addAnimationClass(className: string) {
    const contentElement = document.querySelector(`#${this.componentConfig.subtitle.toLocaleLowerCase()} .carousel-content`);
    if (contentElement) {
      contentElement.classList.add(className);
      setTimeout(() => {
        contentElement.classList.remove(className);
      }, 500);
    }
  }

  selectSubject(title: string, event: MouseEvent) {
    const subject = this.componentConfig.subjects.find(subj => subj.title === title) || null;
    this.addAnimationClass('slide-out');
    setTimeout(() => {
      this.selected.set(subject);
      if (subject) {
        this.currentIndex.set(this.componentConfig.subjects.findIndex(subj => subj.title === subject.title));
      }
      this.addAnimationClass('slide-in');
    }, 500);
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
    const halfVisible = Math.floor((this.isSmallScreen() ? 5 : 3) / 2);
    
    const visibleItems = [];
    for (let i = -halfVisible; i <= halfVisible; i++) {
      const index = (centerIndex + i + totalItems) % totalItems;
      visibleItems.push(subjects[index]);
    }
    
    return visibleItems;
  }

  next() {
    this.addAnimationClass('slide-out');
    setTimeout(() => {
      const nextIndex = (this.currentIndex() + 1) % this.componentConfig.subjects.length;
      this.currentIndex.set(nextIndex);
      this.selected.set(this.componentConfig.subjects[nextIndex]);
      this.addAnimationClass('slide-in');
    }, 500);
    this.removeFocusToButtons();
  }

  prev() {
    this.addAnimationClass('slide-out');
    setTimeout(() => {
      const prevIndex = (this.currentIndex() - 1 + this.componentConfig.subjects.length) % this.componentConfig.subjects.length;
      this.currentIndex.set(prevIndex);
      this.selected.set(this.componentConfig.subjects[prevIndex]);
      this.addAnimationClass('slide-in');
    }, 500);
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
