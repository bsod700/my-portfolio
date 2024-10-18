import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CtaComponent, FooterComponent, IconsImgComponent, NavbarComponent } from '@shared/index';
import { WebsiteLpsConfig, WebsiteLpsConfigService } from './website-lps-config.service';
import { CommonModule } from '@angular/common';
import { Cta } from '@core/index';

@Component({
  selector: 'app-websites-lps',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CtaComponent, IconsImgComponent, FooterComponent],
  templateUrl: './websites-lps.component.html',
  styleUrl: './websites-lps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsitesLpsComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private websiteLpsConfigService: WebsiteLpsConfigService = inject(WebsiteLpsConfigService);

  websiteTitle: string = '';
  config!: WebsiteLpsConfig | undefined;
  nextProject!: Cta | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const websiteTitle = params.get('title');
      if (websiteTitle) {
        this.websiteTitle = websiteTitle;
        this.config = this.websiteLpsConfigService.getWebsiteLps(websiteTitle);
        this.nextProject = this.websiteLpsConfigService.createCtaForNextProject(websiteTitle);
        this.cdr.markForCheck();
      }
    });
  }
}
