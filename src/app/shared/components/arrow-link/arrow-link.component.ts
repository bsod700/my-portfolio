import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsImgComponent } from '../icons-img/icons-img.component';
import { ScrollService } from '@core/index';

@Component({
  selector: 'app-arrow-link',
  standalone: true,
  imports: [RouterModule, IconsImgComponent],
  templateUrl: './arrow-link.component.html',
  styleUrl: './arrow-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowLinkComponent {
  @Input() componentConfig!: ArrowLink;
  scrollService: ScrollService = inject(ScrollService);

  scrollToSection(event: Event): void {
    this.scrollService.scrollToSection(event, this.componentConfig);
  }
}

export interface ArrowLink {
  label: string;
  showIcon: boolean;
  scrollToLink?: boolean;
  icon?: string;
  inLink?: string;
  outLink?: string;
}
