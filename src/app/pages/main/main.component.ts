import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Main, MainConfigService } from './main-config.service';
import { AboutComponent, CarouselComponent, ContactComponent, FooterComponent, NavbarComponent, ProjectsComponent, 
  ReviewsComponent, ServicesComponent, TechnologiesComponent } from '@shared/index';
import { HeaderComponent } from './components';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, AboutComponent, CarouselComponent,
    TechnologiesComponent, ReviewsComponent, ContactComponent, FooterComponent
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
