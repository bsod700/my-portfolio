import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Img } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-mono-dynamic-section',
  standalone: true,
  imports: [CommonModule, GetIconComponent],
  templateUrl: './mono-dynamic-section.component.html',
  styleUrl: './mono-dynamic-section.component.scss'
})
export class MonoDynamicSectionComponent {
  @Input() componentConfig!: ProjectMonoDynamicSectionConfig;
}

export interface ProjectMonoDynamicSectionConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: {
    bulletImage?: Img;
    iconName?: string;
    title: string;
    text: string;
  }[];
  image?: Img;
  dir: string;
}
