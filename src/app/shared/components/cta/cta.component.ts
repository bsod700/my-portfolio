import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cta } from '@core/index';
import { IconsImgComponent } from '../icons-img/icons-img.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterModule,IconsImgComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent {
  @Input() ctaConfig!: Cta;
  @Input() onClick!: () => void;
}
