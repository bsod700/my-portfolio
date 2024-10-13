import { inject, Injectable } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { FooterConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class MoreProjectsConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);

  getPageConfig(): moreProjectsConfig {
      return {
        navbar: this.defaultConfigService.getRegularNavbar(),
        moreProjects: {
          title: 'Explore my work',
          subtitle: 'Designs',
          paragraph: 'As a versatile designer, I create engaging websites, dynamic graphics, animations, apps, and games tailored to various industries. Explore my designs in different fields.',
          types: [
            {
              value: 'websitesLps',
              title: 'Websites / Landing Page',
              iconName: 'ui'
            },
            {
              value: 'saas',
              title: 'Web-App / Saas / CRM',
              iconName: 'management'
            },
            {
              value: 'branding',
              title: 'Logo / Branding',
              iconName: 'diamond'
            },
            {
              value: 'emailsBanners',
              title: 'Emails / Newsletter / banners',
              iconName: 'mail'
            },
            {
              value: 'illustrations',
              title: 'Illustrations Animations / Game',
              iconName: 'phone_android'
            }
          ]
        },
        footer: this.defaultConfigService.getRegularFooter()
    }
  }
}

export interface moreProjectsConfig {
  navbar: NavbarRegular;
  moreProjects: {
    title: string;
    subtitle: string;
    paragraph: string;
    types: typeConfig[];
  };
  footer: FooterConfig;
}

export interface typeConfig {
  value: string;
  title: string;
  iconName: string;
}
