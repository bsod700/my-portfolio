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
export class ReviewsComponent {
  @Input() componentConfig!: ReviewsConfig;
  selectedIndex = signal(0);

  // ngOnInit() {
  //   // this.startCarousel();
  // }

  // startCarousel() {
  //   setInterval(() => {
  //     this.selectedIndex.set((this.selectedIndex() + 1) % this.componentConfig.reviews.length);
  //   }, 3000); // Change review every 3 seconds
  // }

  selectReview(index: number): void {
    this.selectedIndex.set(index);
  }

  isSelected(index: number): boolean {
    return this.selectedIndex() === index;
  }

  get visibleItems(): Review[] {
    const subjects = this.componentConfig.reviews;
    const totalItems = subjects.length;
    const centerIndex = this.selectedIndex();
    const halfVisible = Math.floor(3 / 2); // Adjust for 3 visible items

    const visibleItems = [];
    for (let i = -halfVisible; i <= halfVisible; i++) {
      const index = (centerIndex + i + totalItems) % totalItems;
      visibleItems.push(subjects[index]);
    }

    return visibleItems;
  }
}

export interface ReviewsConfig {
  title: string;
  subtitle: string;
  paragraph: string;
  reviews: Review[];
}
