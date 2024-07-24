import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-wireframes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wireframes.component.html',
  styleUrl: './wireframes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WireframesComponent {
  @Input() componentConfig!: ProjectWireframesConfig;
}

export interface ProjectWireframesConfig {
  projectName: string;
  specialClass?: string;
  img?: Img;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
}
