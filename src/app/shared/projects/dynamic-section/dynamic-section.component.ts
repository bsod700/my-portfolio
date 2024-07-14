import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-section.component.html',
  styleUrl: './dynamic-section.component.scss'
})
export class DynamicSectionComponent {
  @Input() componentConfig!: ProjectDynamicSectionConfig;
}

export interface ProjectDynamicSectionConfig {
  projectName: string;
  sections: {
    dir: string;
    title?:string;
    subtitle: string;
    paragraphs: string[];
    bullets?: {
      title: string;
      text:string;
    }[],
    img?: Img;
  }[];
}
