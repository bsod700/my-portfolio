import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { managementConfig, ManagementConfigService } from './management-config.service';
import { Cta } from '@core/index';
import { CtaComponent, FooterComponent, IconsImgComponent, NavbarComponent } from '@shared/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CtaComponent, IconsImgComponent, FooterComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagementComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private managementConfigService: ManagementConfigService = inject(ManagementConfigService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  config!: managementConfig | undefined;
  nextProject!: Cta | undefined;
  websiteTitle: string = '';
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const websiteTitle = params.get('title');
      if (websiteTitle) {
        this.websiteTitle = websiteTitle;
        this.config = this.managementConfigService.getManagements(websiteTitle);
        this.nextProject = this.managementConfigService.createCtaForNextProject(websiteTitle);
        this.cdr.markForCheck();
      }
    });
  }
}
