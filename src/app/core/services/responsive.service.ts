import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private readonly breakpoints = {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)',
  };

  private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  private screenWidth$: Observable<BreakpointState> = this.breakpointObserver.observe(
    Object.values(this.breakpoints)
  );

  screenWidth = toSignal(this.screenWidth$);

  smWidth = computed(() => this.screenWidth()?.breakpoints[this.breakpoints.sm]);
  mdWidth = computed(() => this.screenWidth()?.breakpoints[this.breakpoints.md]);
  lgWidth = computed(() => this.screenWidth()?.breakpoints[this.breakpoints.lg]);
  xlWidth = computed(() => this.screenWidth()?.breakpoints[this.breakpoints.xl]);
  xxlWidth = computed(() => this.screenWidth()?.breakpoints[this.breakpoints.xxl]);
}
