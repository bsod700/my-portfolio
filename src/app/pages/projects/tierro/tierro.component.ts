import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TierroProjectConfig, TierroProjectConfigService } from './tierro-config.service';
import { ComponentsLibraryShowComponent, DesignSystemShowComponent, DynamicSectionComponent, FinalSectionComponent, HeaderComponent, IconsImgComponent,
   MonoDynamicSectionComponent, NavbarComponent, PersonasComponent, ProblemSolutionComponent, ProcessComponent, 
   SectionBulletsComponent, SectionButtonComponent, 
   SectionsJumpComponent} from '@shared/index';

@Component({
  selector: 'app-tierro',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, DynamicSectionComponent, ProcessComponent, ProblemSolutionComponent, MonoDynamicSectionComponent,
    IconsImgComponent, SectionBulletsComponent, PersonasComponent, ComponentsLibraryShowComponent, SectionButtonComponent, DesignSystemShowComponent,
    SectionsJumpComponent, FinalSectionComponent
  ],
  templateUrl: './tierro.component.html',
  styleUrl: './tierro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TierroComponent {
  config!: TierroProjectConfig;
  private tierroProjectConfigService = inject(TierroProjectConfigService);

  ngOnInit() {
    this.config = this.tierroProjectConfigService.getPageConfig();
  }
}
