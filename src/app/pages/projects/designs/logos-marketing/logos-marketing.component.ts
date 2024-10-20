import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cta } from '@core/index';
import { CtaComponent, FooterComponent, IconsImgComponent, NavbarComponent } from '@shared/index';
import { logosMarketingConfig, LogosMarketingConfigService } from './logos-marketing-config.service';

@Component({
  selector: 'app-logos-marketing',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CtaComponent, IconsImgComponent, FooterComponent],
  templateUrl: './logos-marketing.component.html',
  styleUrl: './logos-marketing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogosMarketingComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private logosMarketingConfigService: LogosMarketingConfigService = inject(LogosMarketingConfigService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  config!: logosMarketingConfig | undefined;
  nextProject!: Cta | undefined;
  websiteTitle: string = '';
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const websiteTitle = params.get('title');
      if (websiteTitle) {
        this.websiteTitle = websiteTitle;
        this.config = this.logosMarketingConfigService.getLogosMarketing(websiteTitle);
        this.nextProject = this.logosMarketingConfigService.createCtaForNextProject(websiteTitle);
        this.cdr.markForCheck();
      }
    });
  }
}
