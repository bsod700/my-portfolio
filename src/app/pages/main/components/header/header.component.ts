import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Cta, ScrollService } from '@core/index';
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
  scrollService: ScrollService = inject(ScrollService);

  scrollTo(event: Event) {
    const comp = {name: 'mouse', scrollTo: 'about'}
    this.scrollService.scrollToSection(event, comp);
  }
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.scrollTo(event);
      event.preventDefault(); 
    }
  }
}
export interface headerConfig {
  h1: string,
  h2: string;
  h3: string;
  ctaJob: Cta;
  ctaAbout: Cta;
}
