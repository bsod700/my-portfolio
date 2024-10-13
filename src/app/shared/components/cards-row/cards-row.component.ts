
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardWorkComponent, CardWorkConfig } from '@shared/index';

@Component({
  selector: 'app-cards-row',
  standalone: true,
  imports: [ CardWorkComponent, RouterModule ],
  templateUrl: './cards-row.component.html',
  styleUrl: './cards-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsRowComponent {
  @Input() componentConfig!: CardsRowConfig;
  @Input() type!: string;
}

export interface CardsRowConfig {
  title: string;
  moreLink: string;
  cards: CardWorkConfig[];
}
