import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() componentConfig!: HeaderProjectConfig;
}

export interface HeaderProjectConfig {
  projectName: string;
  logo: Img;
  title: string;
  subtitle: string;
  bullets: {
    title: string;
    subtitle: string;
  }[],
  img?: Img;
}
