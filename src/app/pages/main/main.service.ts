import { Injectable, inject } from '@angular/core';
import { DefaultConfigService, Img } from '@core/index';

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
      logo: this.defaultConfigService.getLogo(),
    }
  }
}
export interface Main {
  logo: Img;
}
