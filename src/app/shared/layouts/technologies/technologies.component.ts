import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { Tech } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [GetIconComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent implements OnInit, AfterViewInit {
  @Input() componentConfig!: TechnologiesConfig;

  public firstHalf: Tech[] = [];
  public secondHalf: Tech[] = [];

  @ViewChild('scrollRow', { static: false }) scrollRow!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollRow2', { static: false }) scrollRow2!: ElementRef<HTMLDivElement>;
  
  private scrollAmount = signal(0);
  isScrolling = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit(): void {
    const technologies = this.componentConfig.technologies;
    const mid = Math.ceil(technologies.length / 2);
    this.firstHalf = technologies.slice(0, mid);
    this.secondHalf = technologies.slice(mid);
  }

  trackByFn(index: number, item: Tech): string {
    return `${index}-${item.title.toLocaleLowerCase()}`; 
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupInfiniteScroll(this.scrollRow.nativeElement, false);
      this.setupInfiniteScroll(this.scrollRow2.nativeElement, true);
    }
  }

  toggleScrollAnimation(): void {
    this.isScrolling = !this.isScrolling;
    const rows = [this.scrollRow.nativeElement, this.scrollRow2.nativeElement];
    rows.forEach(row => {
      row.classList.toggle('paused', !this.isScrolling);
    });
  }

  private setupInfiniteScroll(container: HTMLDivElement, reverse: boolean): void {
    // Initialize signals for each row
    const scrollSignal = signal(0);

    const children = Array.from(container.querySelectorAll<HTMLElement>('.tech'));
    children.forEach(child => container.appendChild(child.cloneNode(true)));

    const step = reverse ? -1 : 1; // Determine the scroll direction
    const totalWidth = container.scrollWidth / 2;

    const scroll = () => {
      if (this.isScrolling) {
        scrollSignal.update((current) => {
          let updatedScroll = current + step;
          if (!reverse && updatedScroll >= totalWidth) {
            updatedScroll = 0; // Reset scroll position for forward direction
          } else if (reverse && updatedScroll <= -totalWidth) {
            updatedScroll = 0; // Reset for reverse direction
          }
          container.style.transform = `translateX(${updatedScroll}px)`;
          return updatedScroll;
        });
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }
}

export interface TechnologiesConfig {
  title: string;
  subtitle: string;
  technologies: Tech[];
}
