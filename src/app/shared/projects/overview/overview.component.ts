import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
  @Input() componentConfig!: ProjectOverviewConfig;
}
export interface ProjectOverviewConfig {
  projectName: string;
  specialClass?: string;
  img?: Img;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  text: {
    subtitle?: string;
    paragraphs?: string[];
  }[];
}
