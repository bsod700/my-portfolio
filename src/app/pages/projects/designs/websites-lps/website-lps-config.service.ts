import { Injectable } from '@angular/core';
import { Cta, Img } from '@core/index';

@Injectable({
  providedIn: 'root'
})
export class WebsiteLpsConfigService {

  websiteLps(): WebsiteLp {
    return {
        tierro: {
          logo: {
            src: 'assets/images/projects/tierro/logo-color.svg',
            alt: 'Tierro project logo'
          },
          title: 'Background',
          subtitle: 'Innovative Webpage for a Music Producer',
          paragraph: [
            'Tierro, a music producer, was looking for a digital platform that truly captured their musical creativity. I crafted a visually engaging webpage that brings Tierro’s artistic vision to life. To make the experience even more immersive, I developed a custom music player tailored to their unique sound. This project not only highlights Tierro’s work but also strengthens their connection with their audience online.'
          ],
          liveWebsite: {
            text: 'Visit Live Website',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to Tierro website',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'east_arrow',
            outLink: 'https://www.tierromusic.com'
          },
          industry: 'Music',
          platform: 'Web',
          role: 'UI / UX Designer / Developer',
          imgHero: {
            src: 'assets/images/projects/tierro/header.webp',
            alt: 'Tierro project screens on mobile,tablet and desktop'
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
              text: 'See Logo Design',
              size: 'regular',
              color: 'yellow',
              ariaLabel: 'Go to logo design',
              showIconLeft: false,
              showIconRight: true,
              iconRight: 'diamond',
              inLink: 'projects/design/logos/tierro',
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
              inLink: 'projects/design/saas/tierro',
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
        },
        portfolio: {
          logo: {
            src: 'assets/images/projects/tierro/logo-color.svg',
            alt: 'Tierro project logo'
          },
          title: 'Background',
          subtitle: 'Design and Development of a Personal Website to Highlight My Skills and Attract Clients',
          paragraph: [
            'Tierro, a music producer, was looking for a digital platform that truly captured their musical creativity. I crafted a visually engaging webpage that brings Tierro’s artistic vision to life. To make the experience even more immersive, I developed a custom music player tailored to their unique sound. This project not only highlights Tierro’s work but also strengthens their connection with their audience online.'
          ],
          liveWebsite: {
            text: 'Visit Live Website',
            size: 'regular',
            color: 'yellow',
            ariaLabel: 'Go to Guy Tagger portfolio website',
            showIconLeft: false,
            showIconRight: true,
            iconRight: 'east_arrow',
            inLink: '/',
            target: '_blank'
          },
          industry: 'Music',
          platform: 'Web',
          role: 'UI / UX Designer / Developer',
          imgHero: {
            src: 'assets/images/projects/portfolio/header.webp',
            alt: 'Guy Tagger portfolio project screens on mobile,tablet and desktop'
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
              inLink: 'projects/design/emails-banners/portfolio',
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
              inLink: 'projects/design/logos/portfolio',
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
  getWebsiteLps(title: string): WebsiteLpsConfig | undefined {
    const websiteLps = this.websiteLps();
    return websiteLps[title];
  }

  createCtaForNextProject(currentTitle: string): Cta | undefined {
    const websiteLps = this.websiteLps();
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
      ariaLabel: 'Go to next website project',
      showIconLeft: false,
      showIconRight: true,
      iconRight: 'east_arrow',
      inLink: `projects/design/website-lps/${nextTitle}`,
    };
  
    return ctaConfig;
  }
}

export interface WebsiteLpsConfig {
  logo: Img;
  title: string;
  subtitle: string;
  paragraph: string[];
  liveWebsite?: Cta;
  industry: string;
  platform: string;
  role: string;
  imgHero: Img;
  moreFrom?: Cta[]
}

export interface WebsiteLp {
  [title: string]: WebsiteLpsConfig;
}
