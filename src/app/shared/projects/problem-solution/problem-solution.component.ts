import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problem-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem-solution.component.html',
  styleUrl: './problem-solution.component.scss'
})
export class ProblemSolutionComponent {
  @Input() componentConfig!: ProjectProblemSolutionConfig;
}

export interface ProjectProblemSolutionConfig {
  projectName: string;
  problem: {
    title: string;
    paragraph: string[];
  },
  solution: {
    title: string;
    paragraph: string[];
  }
}
