import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cta, Img } from '@core/index';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-final-section',
  standalone: true,
  imports: [CtaComponent, CommonModule],
  templateUrl: './final-section.component.html',
  styleUrl: './final-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalSectionComponent {
  @Input() componentConfig!: ProjectFinalSectionConfig;
}

export interface ProjectFinalSectionConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  image?: Img;
  paragraphsSide?: string[];
  ctaSides?: Cta[];
}
