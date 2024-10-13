import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, ElementRef, HostListener, inject, Input, OnInit, signal, ViewChild } from '@angular/core';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';
import { CardWorkComponent, CardWorkConfig, FooterComponent, IconsImgComponent, NavbarComponent } from '@shared/index';
import { moreProjectsConfig, MoreProjectsConfigService, typeConfig } from './more-projects-config.service';
import { ActivatedRoute } from '@angular/router';
import { DefaultConfigService } from '@core/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-more-projects',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, IconsImgComponent, GetIconComponent, CardWorkComponent, CommonModule],
  templateUrl: './more-projects.component.html',
  styleUrl: './more-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreProjectsComponent implements OnInit {
  selectedValue: string | null = null;
  placeholder = 'Select Type of Work';
  selectedType!: typeConfig;
  selectedWorks: CardWorkConfig[] = [];
  @Input() category = 'designs'
  private defaultConfigService: DefaultConfigService = inject(DefaultConfigService);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  selectedOption = signal<typeConfig | null>(null);
  isOpen = signal(false);
  displayedOption = computed(() => this.selectedOption()?.title || 'Select Type of Work');
  @ViewChild('dropdownElement') dropdownElement!: ElementRef;
  hoveredOptionIndex: number | null = null;

  rightIcon(index: number): string {
    const selected = this.selectedOption();
    const hovered = this.hoveredOptionIndex === index;

    if (selected && this.config.moreProjects.types[index].value === selected.value) {
      return 'check2';  // Show "check" if this option is selected
    } else if (hovered) {
      return 'west_arrow';  // Show "arrow_left" if this option is hovered
    } else {
      return '';  // Return an empty string for all other cases
    }
  }

   // Track hover state on options
  onHover(index: number) {
    this.hoveredOptionIndex = index;
  }

  // Reset hover state when leaving an option
  onLeave() {
    this.hoveredOptionIndex = null;
  }

  toggleDropdown() {
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.dropdownElement && !this.dropdownElement.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.isOpen.set(false);
  }

  selectOption(index: number) {
    this.selectedOption.set(this.config.moreProjects.types[index]);
    this.isOpen.set(false);
    const selectedValue = this.config.moreProjects.types[index].value
    this.updateSelectedType(selectedValue);
    this.selectedWorks =  this.defaultConfigService.getWorksByCategory(this.category as 'designs' | 'development', selectedValue);
    this.cdr.markForCheck();
  }

  constructor(private route: ActivatedRoute, private eRef: ElementRef) {}

  // onItemSelect(event: Event): void {
  //   const value = (event.target as HTMLSelectElement).value;
  //   this.selectedValue = value;
  //   this.updateSelectedType(value);

  //   this.selectedWorks =  this.defaultConfigService.getWorksByCategory(this.category as 'designs' | 'development', value);
  //   this.cdr.markForCheck();
  // }

  config!: moreProjectsConfig;
  private moreProjectsConfigService = inject(MoreProjectsConfigService);

  updateSelectedType(value: string): void {
    this.selectedType = this.config.moreProjects.types.find(type => type.value === value) ?? this.config.moreProjects.types[0];
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.config = this.moreProjectsConfigService.getPageConfig();
    this.selectedType = this.config.moreProjects.types[0];
    this.selectedWorks =  this.defaultConfigService.getWorksByCategory(this.category as 'designs' | 'development', this.selectedType.value);
    
    this.route.paramMap.subscribe(params => {
      // const category = params.get('category');
      const subcategory = params.get('subcategory');
      this.selectedValue = subcategory;
      if (subcategory) {
        this.selectedValue = subcategory;
        this.updateSelectedType(subcategory);
        const index = this.config.moreProjects.types.indexOf(this.selectedType)
        this.selectOption(index)
      }
    });
  }
}

