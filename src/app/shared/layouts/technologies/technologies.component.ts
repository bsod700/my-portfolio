import { Component, Input } from '@angular/core';
import { Tech } from '@core/index';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  @Input() componentConfig!: TechnologiesConfig;
}

export interface TechnologiesConfig {
  title: string;
  subtitle: string;
  technologies: Tech[];
}
