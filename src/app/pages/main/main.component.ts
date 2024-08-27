import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Main, MainConfigService } from './main-config.service';
import { AboutComponent, ContactComponent, ExploreWorkComponent, FooterComponent, IconsImgComponent, NavbarComponent, ReviewsCarouselComponent, TechnologiesComponent } from '@shared/index';
import { HeaderComponent } from './components';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, AboutComponent,
    TechnologiesComponent, ContactComponent, FooterComponent, 
    IconsImgComponent, ExploreWorkComponent, ReviewsCarouselComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  config!: Main;
  private mainConfigService = inject(MainConfigService);

  ngOnInit() {
    this.config = this.mainConfigService.getPageConfig();
  }
}
