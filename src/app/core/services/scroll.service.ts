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
      element.scrollIntoView({ behavior });
    } else {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  }
  
}
