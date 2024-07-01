import { Component, Input } from '@angular/core';
import { CarouselComponent, CarouselConfig } from '@shared/index';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() componentConfig!: CarouselConfig;
}


