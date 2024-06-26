import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, NavbarRegular } from '@core/index';
import { headerConfig } from './components';

@Injectable({
  providedIn: 'root'
})
export class MainConfigService {
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
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

    getPageConfig(): Main {
      return {
        navbar: this.defaultConfigService.getRegularNavbar(),
        header: {
          h1: 'HI IM',
          h2: 'GUY TAGGER',
          h3: 'A FRONTEND DEVELOPER & UI/UX DESIGNER & ILLUSTRATOR',
          ctaJob: {
            text: 'Let’s Create Something Great!',
            size: 'default',
            color: 'white',
            ariaLabel: 'string',
            inLink: 'contact',
            showIconRight: true,
            iconRight: 'user'
          },
          ctaAbout: {
            text: 'About',
            size: 'default',
            color: 'dark',
            ariaLabel: 'string',
            inLink: 'about',
            showIconRight: true,
            iconRight: 'job'
          }
        }
    }
  }
}
export interface Main {
  navbar: NavbarRegular;
  header: headerConfig;
}
