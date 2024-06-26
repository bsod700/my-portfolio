import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cta } from '@core/index';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() componentConfig!: headerConfig;
}
export interface headerConfig {
  h1: string,
  h2: string;
  h3: string;
  ctaJob: Cta;
  ctaAbout: Cta;
}
