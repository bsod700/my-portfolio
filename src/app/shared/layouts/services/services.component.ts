import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input() componentConfig!: ServicesConfig;
}

export interface ServicesConfig {

}
