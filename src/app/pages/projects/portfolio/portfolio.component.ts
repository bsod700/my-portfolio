import { Component, inject } from '@angular/core';
import { DesignSystemShowComponent, DynamicSectionComponent, FinalSectionComponent, HeaderComponent, IconsImgComponent, MonoDynamicSectionComponent, NavbarComponent, ProblemSolutionComponent, ProcessComponent, SectionBulletsComponent, StyleGuideComponent } from '@shared/index';
import { PortfolioConfigService, PortfolioProjectConfig } from './portfolio-config.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, DynamicSectionComponent, ProcessComponent, ProblemSolutionComponent, MonoDynamicSectionComponent,
    IconsImgComponent, SectionBulletsComponent, FinalSectionComponent, StyleGuideComponent, DesignSystemShowComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  config!: PortfolioProjectConfig;
  private portfolioProjectConfigService = inject(PortfolioConfigService);

  ngOnInit() {
    this.config = this.portfolioProjectConfigService.getPageConfig();
  }
}
