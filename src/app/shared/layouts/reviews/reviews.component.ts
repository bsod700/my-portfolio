import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { Review } from '@core/index';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  @Input() componentConfig!: ReviewsConfig;
  selectedIndex = signal(0);

  ngOnInit() {
    // this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.selectedIndex.set((this.selectedIndex() + 1) % this.componentConfig.reviews.length);
    }, 3000); // Change review every 3 seconds
  }
}

export interface ReviewsConfig {
  title: string;
  subtitle: string;
  paragraph: string;
  reviews: Review[];
}
