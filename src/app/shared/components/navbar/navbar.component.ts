import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavbarRegular, ScrollService } from '@core/index';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent,CtaComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() componentConfig!: NavbarRegular;

  private scrollService = inject(ScrollService);

  scrollTo(elementId: string): void {
    this.scrollService.scrollToElement(elementId);
  }
}
