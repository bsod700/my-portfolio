import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { Img } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-design-system-show',
  standalone: true,
  imports: [CommonModule, GetIconComponent],
  templateUrl: './design-system-show.component.html',
  styleUrl: './design-system-show.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSystemShowComponent implements OnInit {
  @Input() componentConfig!: ProjectDesignSystemConfig;

  private currentIndex = signal(0);
  private items: WritableSignal<Img[]> = signal([]);

  ngOnInit() {
    if (this.componentConfig) {
      this.items.set(this.componentConfig.cards);
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
}

export interface ProjectDesignSystemConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  cards: Img[];
}
