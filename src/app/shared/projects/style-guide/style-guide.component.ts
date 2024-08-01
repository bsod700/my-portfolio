import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';
import { ResponsiveImageComponent, ResponsiveImageConfig } from '@shared/index';

@Component({
  selector: 'app-style-guide',
  standalone: true,
  imports: [CommonModule, ResponsiveImageComponent, GetIconComponent],
  templateUrl: './style-guide.component.html',
  styleUrl: './style-guide.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleGuideComponent {
  @Input() componentConfig!: ProjectStyleGuideConfig;
}

export interface ProjectStyleGuideConfig {
  projectName: string;
  specialClass?: string;
  title: string;
  subtitle: string;
  paragraphs?: string[];
  abc?: string;
  items: {
    text?: textConfig;
    font?: fontConfig;
    components?: Img[];
    colors?: colorConfig[];
  }[];
}

interface textConfig {
  title?: string;
  subtitle?: string;
  paragraphs: string[];
  bullets?: {
    bulletImage?: Img;
    iconName?: string;
    title: string;
    text: string;
  }[]
}

interface fontConfig {
  title: string;
  img: Img;
  styles: string[]
}
interface colorConfig {
  classes?: string;
  title?: string;
  hex: string;
}