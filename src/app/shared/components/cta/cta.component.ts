import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cta } from '@core/index';
import { IconComponent } from '@shared/index';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
  @Input() ctaConfig!: Cta;

  get iconLeft(): string {
    return this.ctaConfig.iconLeft || '';
  }

  get iconRight(): string {
    return this.ctaConfig.iconRight || '';
  }
}
