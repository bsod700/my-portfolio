import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Breakpoints, Img, ResponsiveService } from '@core/index';

@Component({
  selector: 'app-responsive-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-image.component.html',
  styleUrl: './responsive-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveImageComponent {
  @Input() componentConfig!: ResponsiveImageConfig;
  private responsiveService: ResponsiveService = inject(ResponsiveService);
  breakpoints!: Breakpoints;

  constructor() {
    this.breakpoints = this.responsiveService.getCurrentBreakpoints();
  }
}

export interface ResponsiveImageConfig {
  classes?: string;
  desktopImage: Img;
  tabletImage: Img;
  mobileImage: Img;
}
