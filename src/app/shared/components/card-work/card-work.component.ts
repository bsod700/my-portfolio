import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cta, Img } from '@core/index';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { CommonModule } from '@angular/common';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-card-work',
  standalone: true,
  imports: [GetIconComponent, CommonModule, CtaComponent],
  templateUrl: './card-work.component.html',
  styleUrl: './card-work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWorkComponent {
  @Input() componentConfig!: CardWorkConfig;
}

export interface CardWorkConfig {
  type: string;
  typeIcon: string;
  logo: Img;
  projectName: string;
  specialClass?: string;
  bullets: string[],
  projectImage?: Img;
  comingSoon?: boolean;
  projectDescription: string;
  cta: Cta;
}
