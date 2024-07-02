import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-link',
  standalone: true,
  imports: [],
  templateUrl: './arrow-link.component.html',
  styleUrl: './arrow-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowLinkComponent {
  @Input() componentConfig!: ArrowLink;
}

export interface ArrowLink {
  label: string;
  showIcon: boolean;
  icon?: string;
  inLink?: string;
  outLink?: string;
}
