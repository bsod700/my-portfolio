import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrototypeComponent {
  @Input() componentConfig!: ProjectPrototypeConfig;
}

export interface ProjectPrototypeConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  video: {
    ariaLabel: string;
    poster: string;
    src: string;
  }
}