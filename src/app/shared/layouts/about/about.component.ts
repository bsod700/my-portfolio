import { Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() componentConfig!: AboutConfig;
}

export interface AboutConfig {
  title: string;
  subtitle: string;
  paragraphs: string[],
  img: Img;
}
