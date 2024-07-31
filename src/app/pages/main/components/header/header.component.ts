import { ChangeDetectionStrategy, Component, HostListener, Input, Renderer2, inject } from '@angular/core';
import { Cta, ResponsiveService, ScrollService } from '@core/index';
import { CtaComponent } from '@shared/index';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() componentConfig!: headerConfig;
  scrollService: ScrollService = inject(ScrollService);
  responsiveService: ResponsiveService = inject(ResponsiveService);
  renderer: Renderer2 = inject(Renderer2)

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
    // console.log(svgGroup);
    
    const scrollTop = window.pageYOffset;

    if(svgGroup instanceof SVGGElement) {
      const speed = parseFloat(svgGroup.getAttribute('data-speed')!);
      const movement = -(scrollTop * speed);

      this.renderer.setStyle(svgGroup, 'transform', `rotateZ(${movement}deg) scale(${movement/40*-1 + 1})`);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.responsiveService.lgWidth()) {
      const layers = document.querySelectorAll('.layer');
      const dark = document.querySelector('.dark-layer') as HTMLElement | null
      const mouse = document.querySelector('.img-wrapper-mouse') as HTMLElement | null
      const lights = document.querySelector('.sunlights') as HTMLElement | null
      const scrollTop = window.pageYOffset;
      let headerHeight = 900

      this.moveTransform(dark, headerHeight, 0.4);
      this.moveTransform(mouse, 0, 0.4);
      this.moveTransform(lights, 0, 0.4);

      this.moveLight()

      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')!);
        const movement = -(scrollTop * speed);
        
        this.renderer.setStyle(layer, 'background-position', `bottom ${-movement}px center`);
      });
    }
  }
}
export interface headerConfig {
  h1: string,
  h2: string;
  h3: string;
  ctaJob: Cta;
}
