import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Input, inject } from '@angular/core';
import { NavbarRegular, ScrollService } from '@core/index';
import { ArrowLinkComponent, CtaComponent, LogoComponent } from '@shared/index';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, CtaComponent, ArrowLinkComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() componentConfig!: NavbarRegular;

  scrolled = false;
  notTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100;
    this.notTop = window.scrollY > 0;
  }
}
