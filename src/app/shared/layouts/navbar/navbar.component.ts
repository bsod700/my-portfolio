import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular, ScrollService } from '@core/index';
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
  private _componentConfig!: NavbarRegular;

  @Input()
  set componentConfig(value: NavbarRegular | undefined) {
    if (value) {
      this._componentConfig = value;
    } else {
      this._componentConfig = this.defaultConfigService.getRegularNavbar();
    }
    this.cdr.markForCheck(); 
  }
  
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  private cdr = inject(ChangeDetectorRef);

 
  scrolled = false;
  notTop = false;

  get componentConfig(): NavbarRegular {
    if (this._componentConfig) {
      return this._componentConfig;
    }
    else {
      const config = this.defaultConfigService.getRegularNavbar();
      return config;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100;
    this.notTop = window.scrollY > 0;
  }
}
