import { Injectable } from '@angular/core';
import { Img } from '@core/models/img';
import { NavbarRegular } from '..';

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
  getLogo(): Img {
    return {
      src: 'assets/imgs/logo-orizon.svg',
      alt: 'Guy Tagger',
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
        showIcon: false,
        inLink: 'header',
        scrollToLink: true,
        page: 'home'
      },
      {
        label: 'About',
        showIcon: false,
        inLink: 'about',
        scrollToLink: true,
        page: 'home'
      },
      {
        label: 'Projects',
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
      ariaLabel: 'string',
      scrollTo: 'contact',
      showIconLeft: false,
      showIconRight: false
    }
   }
  }
}
