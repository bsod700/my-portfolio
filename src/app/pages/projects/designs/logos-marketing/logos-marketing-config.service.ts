import { Injectable } from '@angular/core';
import { Cta, Img } from '@core/index';

@Injectable({
  providedIn: 'root'
})
export class LogosMarketingConfigService {

  logosMarketing(): logosMarketing {
    return {
      tierro: {
        title: 'Tierro',
        subtitle: 'Music Producer',
        logo: {
          src: 'assets/images/projects/tierro/logo-color.svg',
          alt: 'Tierro project logo'
        },
        preview: {
          title: 'info',
          paragraphs: [
            'Tierro, a music producer, was looking for a digital platform that truly captured their musical creativity. I crafted a visually engaging webpage that brings Tierro’s artistic vision to life. To make the experience even more immersive, I developed a custom music player tailored to their unique sound. This project not only highlights Tierro’s work but also strengthens their connection with their audience online.'
          ]
        },
        icons: {
          title: 'Icons',
          icons: [
            {
              type: 'cube',
              icon: {
                src: 'assets/images/projects/tierro/icons/icon1.webp',
                alt: 'Tierro icon'
              }
            },
            {
              type: 'cube',
              icon: {
                src: 'assets/images/projects/tierro/icons/icon2.webp',
                alt: 'Tierro icon'
              }
            },
            {
              type: 'circle',
              icon: {
                src: 'assets/images/projects/tierro/icons/icon3.webp',
                alt: 'Tierro icon'
              }
            }
          ]
        },
        moreFrom: [
          {
            text: 'See Newsletter Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to newsletter design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'mail',
            inLink: 'projects/design/emails-banners/tierro',
            target: '_blank'
          },
          {
            text: 'See Admin CRM Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to admin CRM design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'management',
            inLink: 'projects/design/management/tierro',
            target: '_blank'
          },
          {
            text: 'See Website Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to website design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'ui',
            inLink: 'projects/design/website-lps/tierro',
            target: '_blank'
          },
          {
            text: 'UX Case Study',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to UX case study',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'science',
            inLink: 'projects/ux/tierro',
            target: '_blank'
          },
        ]
      }
    }
  }

  getLogosMarketing(title: string): logosMarketingConfig | undefined {
    const emailsBanners = this.logosMarketing();
    return emailsBanners[title];
  }

  createCtaForNextProject(currentTitle: string): Cta | undefined {
    const websiteLps = this.logosMarketing();
    const titles = Object.keys(websiteLps);
  
    const index = titles.indexOf(currentTitle);
    if (index === -1) {
      // Current title not found
      return undefined;
    }
  
    const nextIndex = (index + 1) % titles.length;
    const nextTitle = titles[nextIndex];
  
    const ctaConfig: Cta = {
      text: 'Next Project',
      size: 'regular',
      color: 'yellow',
      ariaLabel: 'Go to next management project',
      showIconLeft: false,
      showIconRight: true,
      iconRight: 'east_arrow',
      inLink: `projects/design/logos-marketing/${nextTitle}`,
    };
  
    return ctaConfig;
  }
}

export interface logosMarketingConfig {
  title: string;
  subtitle: string;
  logo: Img;
  preview: {
    title: string;
    paragraphs: string[];
  };
  logosVariations?: {
    type: string;
    logo: Img;
  }[];
  icons?: {
    title: string;
    icons: {
      type: string;
      icon: Img;
    }[];
  };
  moreFrom?: Cta[];
}

export interface logosMarketing {
  [title: string]: logosMarketingConfig;
}