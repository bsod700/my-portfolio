import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DocumentService, Img } from '@core/index';
import { ArrowLink, ArrowLinkComponent, LogoComponent } from '@shared/index';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, ArrowLinkComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  componentConfig!: FooterConfig;
  documentService: DocumentService= inject(DocumentService);
  
  @Input('componentConfig') set _componentConfig(componentConfig: FooterConfig) {
    this.componentConfig = componentConfig;
    this.documentService.setInnerHtml({
      'copyright-p': componentConfig.copyright
    });
  };
}

export interface FooterConfig {
  logo: Img;
  links: ArrowLink[];
  socials: Img[];
  copyright: string;
}
