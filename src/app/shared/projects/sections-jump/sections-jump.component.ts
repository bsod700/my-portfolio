import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-sections-jump',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sections-jump.component.html',
  styleUrl: './sections-jump.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionsJumpComponent {
  @Input() componentConfig!: ProjectSectionJumpConfig;
}

export interface ProjectSectionJumpConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  sections: {
    classes?: string;
    img: Img;
    title: string;
    backgroundItem?: string;
    paragraphs: string[];
  }[];
}
