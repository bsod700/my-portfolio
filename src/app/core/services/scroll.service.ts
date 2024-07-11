import { ViewportScroller } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private viewportScroller: ViewportScroller = inject(ViewportScroller);

  scrollToElement(elementId: string, behavior: ScrollBehavior = 'smooth'): void {
    const element = document.getElementById(elementId);
    if (element) {
      let offset = 0;
      if (elementId === 'projects') {
        offset = 1000;
      }
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: behavior
      });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }

  scrollToSection(event: Event, comp: any): void {
    const scrollTo = comp.inLink ?? comp.scrollTo;
    event.preventDefault();
    if(scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        let offset = -100;
        if (scrollTo === 'projects') {
          offset = 150;
        }
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        // element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
}
