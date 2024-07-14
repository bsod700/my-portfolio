import { Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-mono-dynamic-section',
  standalone: true,
  imports: [],
  templateUrl: './mono-dynamic-section.component.html',
  styleUrl: './mono-dynamic-section.component.scss'
})
export class MonoDynamicSectionComponent {
  @Input() componentConfig!: ProjectMonoDynamicSectionConfig;
}

export interface ProjectMonoDynamicSectionConfig {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: {
    bulletImage: Img;
    title: string;
    text: string;
  }[];
  image?: Img;
}
