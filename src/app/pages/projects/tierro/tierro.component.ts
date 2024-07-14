import { Component, inject } from '@angular/core';
import { TierroProjectConfig, TierroProjectConfigService } from './tierro-config.service';
import { DynamicSectionComponent, HeaderComponent, MonoDynamicSectionComponent, NavbarComponent, ProblemSolutionComponent, ProcessComponent } from '@shared/index';

@Component({
  selector: 'app-tierro',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, DynamicSectionComponent, ProcessComponent, ProblemSolutionComponent, MonoDynamicSectionComponent],
  templateUrl: './tierro.component.html',
  styleUrl: './tierro.component.scss'
})
export class TierroComponent {
  config!: TierroProjectConfig;
  private tierroProjectConfigService = inject(TierroProjectConfigService);

  ngOnInit() {
    this.config = this.tierroProjectConfigService.getPageConfig();
  }
}
