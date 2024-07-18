import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-section-bullets',
  standalone: true,
  imports: [CommonModule, GetIconComponent],
  templateUrl: './section-bullets.component.html',
  styleUrl: './section-bullets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionBulletsComponent {
  @Input() componentConfig!: ProjectSectionBulletsConfig;
}
export interface ProjectSectionBulletsConfig {
  projectName: string;
  style: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  bullets: {
    bulletImage?: Img;
    iconName?: string;
    title: string;
    text: string;
  }[]
}