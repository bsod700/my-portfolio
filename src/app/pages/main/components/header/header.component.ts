import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit, Renderer2, inject } from '@angular/core';
import { Cta, DocumentService, ResponsiveService, ScrollService } from '@core/index';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() componentConfig!: headerConfig;
  scrollService: ScrollService = inject(ScrollService);
  responsiveService: ResponsiveService = inject(ResponsiveService);
  renderer: Renderer2 = inject(Renderer2);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  documentService: DocumentService= inject(DocumentService);

  

  mobile: boolean = false;
  scrollTo(event: Event) {
    const comp = {name: 'mouse', scrollTo: 'about'}
    this.scrollService.scrollToSection(event, comp);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.scrollTo(event);
      event.preventDefault(); 
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (this.responsiveService.lgWidth()) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
    this.cdr.markForCheck();
  }

  moveTransform(element: HTMLElement | null, _gap?: number | undefined, _delay?: number): void {
    const scrollTop = window.pageYOffset;
    const gap = _gap ?? 0;
    const delay = _delay ?? 1;
    
    if(element instanceof HTMLElement) {
      const speed = parseFloat(element.getAttribute('data-speed')!);
      const movement = -(scrollTop * speed * delay) + gap;

      this.renderer.setStyle(element, 'transform', `translateY(${movement}px)`);
    }
  }

  moveLight(): void {
    const svgGroup = document.querySelector('.sunlights svg g') as SVGGElement | null;
    
    const scrollTop = window.pageYOffset;

    if(svgGroup instanceof SVGGElement) {
      const speed = parseFloat(svgGroup.getAttribute('data-speed')!);
      const movement = -(scrollTop * speed);

      this.renderer.setStyle(svgGroup, 'transform', `rotateZ(${movement}deg) scale(${movement/40*-1 + 1})`);

       // Calculate opacity
      const opacity = Math.max(0, 1 - Math.abs(movement/2) / 100);
      this.renderer.setStyle(svgGroup, 'opacity', opacity.toString());

      // remove the element from the DOM after it becomes invisible
      if (opacity === 0) {
        this.renderer.setStyle(svgGroup, 'display', 'none');
      }
      else {
        this.renderer.setStyle(svgGroup, 'display', 'block');
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.responsiveService.lgWidth()) {
      const layers = document.querySelectorAll('.layer');
      const lights = document.querySelector('.sunlights') as HTMLElement | null
      const scrollTop = window.pageYOffset;

      this.moveTransform(lights, 0, 0.4);

      this.moveLight()

      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')!);
        const movement = -(scrollTop * speed);
        
        this.renderer.setStyle(layer, 'background-position', `bottom ${-movement}px center`);
      });
    }
  }

  ngOnInit(): void {
    this.checkScreenSize();

    this.documentService.setInnerHtml({
      'header-paragraph': this.componentConfig.h3
    });
  }
}
export interface headerConfig {
  h1: string,
  h2: string;
  h3: string;
  ctaJob: Cta;
}
