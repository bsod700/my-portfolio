import { ChangeDetectionStrategy, Component, Input, OnInit, computed, effect, signal } from '@angular/core';
import { Project, Service } from '@core/index';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CtaComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class CarouselComponent implements OnInit {
  @Input() componentConfig!: CarouselConfig;

  selected = signal<Project | Service | null>(null);

  // constructor() {
  //   console.log('Constructor called');
  //   effect(() => {
  //     console.log('Effect triggered');
  //     this.selected.set(this.componentConfig.subjects[0]);
  //   }, { allowSignalWrites: true });
  // }

  ngOnInit(): void {
    if (this.componentConfig?.subjects?.length) {
      this.selected.set(this.componentConfig.subjects[0]);
    }
  }

  selectSubject(title: string) {
    const subject = this.componentConfig.subjects.find(subj => subj.title === title) || null;
    this.selected.set(subject);
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
}

export interface CarouselConfig {
  title: string;
  subtitle: string;
  subjects: Project[] | Service[];
}
