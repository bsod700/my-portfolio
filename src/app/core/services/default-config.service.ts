import { Injectable } from '@angular/core';
import { Img } from '@core/models/img';
import { NavbarRegular } from '..';
import { logoConfig } from '@shared/index';

@Injectable({
  providedIn: 'root'
})
export class DefaultConfigService {
  // getLangs(): Lang[] {
  //   return [
  //     {
  //       img: 'assets/imgs/langs/he.webp',
  //       name: 'he',
  //       title: 'עברית',
  //       selected: false
  //     },
  //     {
  //       img: 'assets/imgs/langs/us.webp',
  //       name: 'en',
  //       title: 'English',
  //       selected: false
  //     }
  //   ]
  // }
  // getNavbarConfig(): NavbarRegular {
  //   return {
  //     logoImg: this.getLogo(),
  //     cta: {
  //       text: 'Contact Us',
  //       size: '',
  //       color: 'primary',
  //       ariaLabel: 'Go to contact page',
  //       inLink: 'contact'
  //     },
  //     langs: this.getLangs()
  //   }
  // }
  getLogo(): logoConfig {
    return {
      type: 'symbol',
      img: {
        src: 'assets/imgs/logo-symbol.svg',
        alt: 'Guy Tagger',
      }
    }
  }
  // getRegularNavbarNotOnMain(): NavbarRegular {
  //   return {
  //     logo: this.getLogo(),
  //     links: [
  //       {
  //         label: 'Home',
  //         showIcon: false,
  //         inLink: 'header',
  //         scrollToLink: true,
  //         page: 'home'
  //       },
  //       {
  //         label: 'About',
  //         showIcon: false,
  //         inLink: 'about',
  //         scrollToLink: true,
  //         page: 'home'
  //       },
  //       {
  //         label: 'Projects',
  //         showIcon: false,
  //         inLink: 'projects',
  //         scrollToLink: true,
  //         page: 'home'
  //       }
  //     ],
  //     cta: {
  //       text: 'Contact Me',
  //       size: 'regular',
  //       color: 'white',
  //       ariaLabel: 'string',
  //       scrollTo: 'contact',
  //       showIconLeft: false,
  //       showIconRight: false,
  //       page: 'home'
  //     }
  //   }
  // }
  getRegularNavbar(): NavbarRegular {
   return {
    logo: this.getLogo(),
    links: [
      {
        label: 'Home',
        ariaLabel: 'Go to Home',
        showIcon: false,
        inLink: 'header',
        scrollToLink: true,
        page: 'home'
      },
      {
        label: 'About',
        ariaLabel: 'Go to about section',
        showIcon: false,
        inLink: 'about',
        scrollToLink: true,
        page: 'home'
      },
      {
        label: 'Projects',
        ariaLabel: 'Go to projects section',
        showIcon: false,
        inLink: 'projects',
        scrollToLink: true,
        page: 'home'
      }
    ],
    cta: {
      text: 'Contact Me',
      size: 'regular',
      color: 'yellow',
      ariaLabel: 'Go to contact form section',
      scrollTo: 'contact',
      showIconLeft: false,
      showIconRight: false
    }
   }
  }
}
