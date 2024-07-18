import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResponsiveImageComponent, ResponsiveImageConfig } from '@shared/components/responsive-image/responsive-image.component';

@Component({
  selector: 'app-components-library-show',
  standalone: true,
  imports: [CommonModule, ResponsiveImageComponent],
  templateUrl: './components-library-show.component.html',
  styleUrl: './components-library-show.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsLibraryShowComponent {
  @Input() componentConfig!: ProjectComponentsLibraryShowConfig;
}

export interface ProjectComponentsLibraryShowConfig {
  projectName: string;
  specialClass?: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  components: ResponsiveImageConfig[];
}
