import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, inject, Input, OnInit, signal, Signal } from '@angular/core';
import { Img, ResponsiveService } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-reviews-carousel',
  standalone: true,
  imports: [GetIconComponent],
  templateUrl: './reviews-carousel.component.html',
  styleUrl: './reviews-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsCarouselComponent implements OnInit {
  @Input() componentConfig!: ReviewsCarouselConfig;
  @Input() visibleCardsCount: number = 3;

  responsiveService: ResponsiveService = inject(ResponsiveService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  mobile: boolean = false;


  // Signals to track the current active index and displayed cards
  activeIndex = signal(1);
  temporaryActiveIndex = signal(1);

  get visibleCards(): cardConfig[] {
    const cards = this.componentConfig.cards;
    const halfVisible = Math.floor(this.visibleCardsCount / 2);
    const cardsToShow = [];

    // Calculate the indices to display the correct cards
    for (let i = -halfVisible; i <= halfVisible; i++) {
      const index = (this.activeIndex() + i + cards.length) % cards.length;
      cardsToShow.push(cards[index]);
    }

    return cardsToShow;
  }

  next(): void {
    const cards = this.componentConfig.cards;
    this.activeIndex.update(index => (index + 1) % cards.length);
  }

  prev(): void {
    const cards = this.componentConfig.cards;
    this.activeIndex.update(index => (index - 1 + cards.length) % cards.length);
  }

  isActive(index: number): boolean {
    const midIndex = Math.floor(this.visibleCardsCount / 2);
    return index === midIndex;
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    if (!this.responsiveService.mdWidth()) {
      this.visibleCardsCount = 1
    } 
    else {
      this.visibleCardsCount = 3
    }
    this.cdr.markForCheck();
  }
}

export interface ReviewsCarouselConfig {
  title: string;
  subtitle: string;
  paragraphs: string[],
  cards: cardConfig[];
}

interface cardConfig {
  img: Img;
  title: string;
  logo: Img;
  review: string;
}
