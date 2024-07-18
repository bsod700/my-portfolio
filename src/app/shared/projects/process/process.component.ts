import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessComponent {
  @Input() componentConfig!: ProjectProcessConfig;
}

export interface ProjectProcessConfig {
  projectName: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  process: {
    title: string;
    text: string;
  }[]
}
