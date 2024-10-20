import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cta } from '@core/index';
import { EmailsBannersConfig, EmailsBannersConfigService } from './emails-banners-config.service';
import { CtaComponent, FooterComponent, IconsImgComponent, NavbarComponent } from '@shared/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emails-banners',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CtaComponent, IconsImgComponent, FooterComponent],
  templateUrl: './emails-banners.component.html',
  styleUrl: './emails-banners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailsBannersComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private emailsBannersConfigService: EmailsBannersConfigService = inject(EmailsBannersConfigService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  config!: EmailsBannersConfig | undefined;
  nextProject!: Cta | undefined;
  websiteTitle: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const websiteTitle = params.get('title');
      if (websiteTitle) {
        this.websiteTitle = websiteTitle;
        this.config = this.emailsBannersConfigService.getEmailsBanners(websiteTitle);
        this.nextProject = this.emailsBannersConfigService.createCtaForNextProject(websiteTitle);
        this.cdr.markForCheck();
      }
    });
  }
}
