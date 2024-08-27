import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cta, ScrollService } from '@core/index';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterModule, GetIconComponent, CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent {
  @Input() ctaConfig!: Cta;
  @Input() onClick!: () => void;
  
  scrollService: ScrollService = inject(ScrollService);
  private router: Router = inject(Router)

  scrollToSection(event: Event): void {
    this.scrollService.scrollToSection(event, this.ctaConfig);
  }

  scrollToSectionAndPage(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.scrollService.navigateToSection(event, this.ctaConfig, this.ctaConfig.page)
  }

  cta(event: Event) {
    this.onClick;
    if(this.ctaConfig.scrollTo) {
      this.scrollToSectionAndPage(event);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default behavior
      this.cta(event);
      if (this.ctaConfig.inLink) {
        this.router.navigate(['/' + this.ctaConfig.inLink]);
      }
    }
  }
}
