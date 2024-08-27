import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { Img } from '@core/index';

@Component({
  selector: 'app-dynamic-bullets',
  standalone: true,
  imports: [CommonModule, GetIconComponent],
  templateUrl: './dynamic-bullets.component.html',
  styleUrl: './dynamic-bullets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicBulletsComponent {
  @Input() componentConfig!: DynamicBulletsConfig;
}

export interface DynamicBulletsConfig {
  iconColorBG?: string;
  bullets: {
    bulletImage?: Img;
    iconName?: string;
    title: string;
    text: string;
  }[]
}