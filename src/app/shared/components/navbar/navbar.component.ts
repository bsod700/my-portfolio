import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavbarRegular } from '@core/index';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() componentConfig!: NavbarRegular;
}
