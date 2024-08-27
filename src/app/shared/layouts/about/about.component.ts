import { Component, Input } from '@angular/core';
import { Img } from '@core/index';
import { DynamicBulletsComponent, DynamicBulletsConfig } from '@shared/index';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DynamicBulletsComponent],
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
  bullets: DynamicBulletsConfig;
  img: Img;
}
