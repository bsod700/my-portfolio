import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cta } from '@core/index';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-section-button',
  standalone: true,
  imports: [CommonModule, CtaComponent],
  templateUrl: './section-button.component.html',
  styleUrl: './section-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionButtonComponent {
  @Input() componentConfig!: ProjectSectionButtonConfig;
}

export interface ProjectSectionButtonConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  cta: Cta;
}
