import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-figma-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './figma-carousel.component.html',
  styleUrl: './figma-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FigmaCarouselComponent implements OnInit {
  @Input() componentConfig!: FigmaCarouselConfig;
  safeSrc!: SafeResourceUrl;
  private currentIndex = signal(0);
  private items: WritableSignal<FigmaConfig[]> = signal([]);
  selectedFigma = signal<FigmaConfig | null>(null);

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.componentConfig?.figmas?.length) {
      this.items.set(this.componentConfig.figmas);
      this.selectedFigma.set(this.componentConfig.figmas[0]);
    }
  }

  next() {
    this.currentIndex.update(index => (index + 1) % this.items().length);
  }

  prev() {
    this.currentIndex.update(index => (index - 1 + this.items().length) % this.items().length);
  }

  visibleItems = computed(() => {
    const totalItems = this.items().length;
    const index = this.currentIndex();
    return [
      this.items()[(index - 1 + totalItems) % totalItems],
      this.items()[index],
      this.items()[(index + 1) % totalItems]
    ];
  });

  selectFigma(title: string, event: MouseEvent) {
    const _figma = this.componentConfig.figmas.find(figma => figma.title === title) || null;
    this.selectedFigma.set(_figma);
    if (_figma) {
      this.currentIndex.set(this.componentConfig.figmas.findIndex(figma => figma.title === _figma.title));
    }
    this.removeFocusToButtons();
  }

  removeFocusToButtons(): void {
      const buttons = document.querySelectorAll('.buttons');
      buttons.forEach(button => (button as HTMLElement).blur());
  }

  generateId(title: string): string {
    return title.replace(/ /g, '-');
  }

  get selectedItem() {
    return this.selectedFigma();
  }

  getAriaLabel(figma: FigmaConfig ): string {
    return `Go to ${figma.title}`;
  }

  getSafeSrc(unSafeLink: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(unSafeLink);
  }
}

export interface FigmaCarouselConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  figmas: FigmaConfig[]
}

interface FigmaConfig {
  width: string;
  height: string;
  link: string;
  title: string;
}
