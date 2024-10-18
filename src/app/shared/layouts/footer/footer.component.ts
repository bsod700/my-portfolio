import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { DefaultConfigService, DocumentService } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';
import { ArrowLink, ArrowLinkComponent, LogoComponent, logoConfig } from '@shared/index';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, ArrowLinkComponent, CommonModule, GetIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  private _componentConfig!: FooterConfig;
  private documentService: DocumentService= inject(DocumentService);
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  private cdr = inject(ChangeDetectorRef);

  @Input('componentConfig') set componentConfig(componentConfig: FooterConfig | undefined) {
    if(componentConfig) {
      this._componentConfig = componentConfig;
      this.documentService.setInnerHtml({
        'copyright-p': componentConfig.copyright
      });
    } else {
      this._componentConfig = this.defaultConfigService.getRegularFooter();
      this.documentService.setInnerHtml({
        'copyright-p': this._componentConfig.copyright
      });
    }

    this.cdr.markForCheck(); 
  };

  get componentConfig(): FooterConfig {
    if (this._componentConfig) {
      this.documentService.setInnerHtml({
        'copyright-p': this._componentConfig.copyright
      });
      return this._componentConfig;
    }
    else {
      const config = this.defaultConfigService.getRegularFooter();
      this.documentService.setInnerHtml({
        'copyright-p': config.copyright
      });
      return config;
    }
  }
}

export interface FooterConfig {
  logo: logoConfig;
  links: ArrowLink[];
  socials: {
    url: string;
    iconName: string;
  }[];
  email: {
    link: string;
    text: string;
  };
  copyright: string;
}
