import { Component, Input, OnInit } from '@angular/core';
import { Tech } from '@core/index';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent implements OnInit {
  @Input() componentConfig!: TechnologiesConfig;

  public firstHalf: Tech[] = [];
  public secondHalf: Tech[] = [];

  ngOnInit(): void {
    const technologies = this.componentConfig.technologies;
    const mid = Math.ceil(technologies.length / 2);
    this.firstHalf = technologies.slice(0, mid);
    this.secondHalf = technologies.slice(mid);
  }

  trackByFn(index: number, item: Tech): string {
    return `${index}-${item.title.toLocaleLowerCase()}`; 
  }
}

export interface TechnologiesConfig {
  title: string;
  subtitle: string;
  technologies: Tech[];
}
