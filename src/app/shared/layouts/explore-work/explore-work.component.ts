import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardsRowComponent, CardsRowConfig } from '@shared/index';

@Component({
  selector: 'app-explore-work',
  standalone: true,
  imports: [CardsRowComponent ],
  templateUrl: './explore-work.component.html',
  styleUrl: './explore-work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreWorkComponent {
  @Input() componentConfig!: ExploreWorkConfig;
}

export interface ExploreWorkConfig {
  title: string;
  subtitle: string;
  types: {
    title: string;
    subtitle: string;
    cardRows: CardsRowConfig[];
  }[];
}
