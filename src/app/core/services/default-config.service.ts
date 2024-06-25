import { Injectable } from '@angular/core';
import { Img } from '@core/models/img';

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
}
