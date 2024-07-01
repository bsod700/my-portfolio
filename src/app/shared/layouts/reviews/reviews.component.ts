import { Component, Input } from '@angular/core';
import { Review } from '@core/index';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input() componentConfig!: ReviewsConfig;
}

export interface ReviewsConfig {
  title: string;
  subtitle: string;
  paragraph: string;
  reviews: Review[];
}
