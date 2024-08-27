import { ViewportScroller } from '@angular/common';
import { Inject, Injectable, inject } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, map, Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private viewportScroller: ViewportScroller = inject(ViewportScroller);
  private router: Router = inject(Router);

  scrollToTop(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0); // Scroll to top on navigation end
    });
  }

  scrollToElement(elementId: string, behavior: ScrollBehavior = 'smooth'): void {
    const element = document.getElementById(elementId);
    if (element) {
      let offset = 0;
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
  
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setTimeout(() => {
          element.focus({ preventScroll: true })
        },1000)
      }
    }
  }
  
  navigateToSection(event: Event, comp: any, page?: string ) {
    const scrollTo = comp.inLink ?? comp.scrollTo;
    const currentRoute = this.getCurrentRoute();
    
      if (currentRoute === page) {
        console.log('in page');
        
        this.scrollToSection(event, comp);
      } else {
        console.log('new page');
        
        this.scrollToTop()
        this.router.navigate([`/${page}`], { fragment: scrollTo }).then(() => {
       
          this.scrollToSection(event, comp);
        });
      }
  }
  
  getCurrentRoute(): string {
    const currentUrl = this.router.url;
    const urlSegments = currentUrl.split('/');
    
    return urlSegments.length > 1 ? urlSegments[1] : '';
  }
}
