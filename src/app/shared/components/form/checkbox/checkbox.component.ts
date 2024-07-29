import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, GetIconComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {

  private _config: CheckboxConfig = {
    controlName: '',
    id: '',
    label: '',
    ariaLabel: '',
    ariaDescribedBy: '',
    required: false,
    checkIcon: 'check',
    value: false
  };

  @Input()
  set config(value: CheckboxConfig) {
    this._config = { ...this._config, ...value };
  }
  
  // @Output() labelChange = new EventEmitter<{label: string, checked: boolean}>();


  get config(): CheckboxConfig {
    return this._config;
  }

  value: boolean = false;
  onChange = (value: boolean) => {};
  onTouched = () => {};

  writeValue(value: boolean): void {
    this.value = value ?? false;  // Safeguard to ensure value is always boolean
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if necessary
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.checked;
      this.onChange(this.value);
      this.onTouched();
      if (this.value) {
        console.table({label: this.config.label, checked: this.value});
        
        // this.labelChange.emit({label: this.config.label, checked: this.value});
      }
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default behavior like page scrolling
      this.value = !this.value;
      this.onChange(this.value);
      this.onTouched();
      // if (this.value) {
      //   this.labelChange.emit({label: this.config.label, checked: this.value});
      // }
    }
  }
}

export interface CheckboxConfig {
  controlName: string;
  id: string;
  label: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  required: boolean;
  value: boolean;
  
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
  checkIcon?: string;
  iconColor?: string;
}
