import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  @Input() logoConfig!: Img;
}
