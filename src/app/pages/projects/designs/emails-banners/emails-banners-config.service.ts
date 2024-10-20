import { Injectable } from '@angular/core';
import { Cta, Img } from '@core/index';

@Injectable({
  providedIn: 'root'
})
export class EmailsBannersConfigService {
  emailsBanners(): EmailsBanners {
    return {
      portfolio: {
        title: 'Guy Tagger',
        subtitle: 'Design & Developer Portfolio',
        row: {
          title: 'info',
          paragraphs: [
            'Tierro, a music producer, was looking for a digital platform that truly captured their musical creativity. I crafted a visually engaging webpage that brings Tierro’s artistic vision to life. To make the experience even more immersive, I developed a custom music player tailored to their unique sound. This project not only highlights Tierro’s work but also strengthens their connection with their audience online.'
          ],
          img: {
            src: 'assets/images/logo-vertical.svg',
            alt: 'Guy Tagger portfolio logo'
          }
        },
        emails: [
          {
            title: 'mobile',
            imgs: {
              src: 'assets/images/projects/portfolio/email/mobile.webp',
              alt: 'Guy Tagger newsletter mobile'
            }
          },
          {
            title: 'tablet',
            imgs: {
              src: 'assets/images/projects/portfolio/email/desktop.webp',
              alt: 'Guy Tagger newsletter tablet'
            }
          },
          {
            title: 'template',
            imgs: {
              src: 'assets/images/projects/portfolio/email/template.webp',
              alt: 'Guy Tagger newsletter template'
            }
          },
        ],
        moreFrom: [
          {
            text: 'See Website Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to newsletter design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'ui',
            inLink: 'projects/design/website-lps/portfolio',
            target: '_blank'
          },
          {
            text: 'See Logo Design',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to logo design',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'diamond',
            inLink: 'projects/design/logos-marketing/portfolio',
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
            inLink: 'projects/ux/portfolio',
            target: '_blank'
          },
        ]
      }
    }
  }

  getEmailsBanners(title: string): EmailsBannersConfig | undefined {
    const emailsBanners = this.emailsBanners();
    return emailsBanners[title];
  }

  createCtaForNextProject(currentTitle: string): Cta | undefined {
    const websiteLps = this.emailsBanners();
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
      ariaLabel: 'Go to next emails banners project',
      showIconLeft: false,
      showIconRight: true,
      iconRight: 'east_arrow',
      inLink: `projects/design/emails-banners/${nextTitle}`,
    };
  
    return ctaConfig;
  }
}

export interface EmailsBannersConfig {
  title: string;
  subtitle: string;
  row: {
    title: string;
    paragraphs: string[];
    img: Img;
  };
  emails?: {
    title: string;
    imgs: Img;
  }[];
  moreFrom?: Cta[];
}

export interface EmailsBanners {
  [title: string]: EmailsBannersConfig;
}