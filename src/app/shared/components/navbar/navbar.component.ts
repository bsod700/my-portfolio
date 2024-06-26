import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { NavbarRegular, ScrollService } from '@core/index';
import { ArrowLinkComponent, CtaComponent, LogoComponent } from '@shared/index';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, CtaComponent, ArrowLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() componentConfig!: NavbarRegular;

  private scrollService = inject(ScrollService);

  scrollTo(elementId: string): void {
    this.scrollService.scrollToElement(elementId);
  }
}
