import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ComponentsLibraryShowComponent, DesignSystemShowComponent, DynamicSectionComponent, FinalSectionComponent, HeaderComponent, IconsImgComponent,
   MonoDynamicSectionComponent, NavbarComponent, OverviewComponent, PersonasComponent, ProblemSolutionComponent, ProcessComponent, 
   PrototypeComponent, 
   SectionBulletsComponent, SectionButtonComponent, 
   SectionsJumpComponent,
   StyleGuideComponent,
   WireframesComponent} from '@shared/index';
import { BrushAlongConfigService, BrushAlongProjectConfig } from './brushalong-config.service';

@Component({
  selector: 'app-brushalong',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, DynamicSectionComponent, ProcessComponent, ProblemSolutionComponent, MonoDynamicSectionComponent,
    IconsImgComponent, SectionBulletsComponent, PersonasComponent, ComponentsLibraryShowComponent, SectionButtonComponent, DesignSystemShowComponent,
    SectionsJumpComponent, FinalSectionComponent, OverviewComponent, WireframesComponent, StyleGuideComponent, PrototypeComponent
  ],
  templateUrl: './brushalong.component.html',
  styleUrl: './brushalong.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrushalongComponent {
  config!: BrushAlongProjectConfig;
  private brushAlongProjectConfigService = inject(BrushAlongConfigService);

  ngOnInit() {
    this.config = this.brushAlongProjectConfigService.getPageConfig();
  }
}
