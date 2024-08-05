import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-figma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figma.component.html',
  styleUrl: './figma.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FigmaComponent implements OnInit {
  @Input() componentConfig!: FigmaProjectConfig;
  safeSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.componentConfig.figma.link);
  }
}

export interface FigmaProjectConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  figma: {
    width: string;
    height: string;
    link: string;
  }
}
