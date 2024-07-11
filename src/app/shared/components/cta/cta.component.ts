import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cta, ScrollService } from '@core/index';
import { GetIconComponent } from '../get-icon/get-icon.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterModule, GetIconComponent],
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

  cta(event: Event) {
    this.onClick;
    if(this.ctaConfig.scrollTo) {
      // console.log(this.ctaConfig.scrollTo);
      this.scrollToSection(event);
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
