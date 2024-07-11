import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {

  private _config: CheckboxConfig = {
    controlName: '',
    label: '',
    ariaLabel: '',
    ariaDescribedBy: '',
    required: false,
    checkIcon: 'check',
  };

  @Input()
  set config(value: CheckboxConfig) {
    this._config = { ...this._config, ...value };
  }

  get config(): CheckboxConfig {
    return this._config;
  }

  value: boolean = false;
  onChange = (value: boolean) => {};
  onTouched = () => {};

  writeValue(value: boolean): void {
    this.value = value;
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
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default behavior like page scrolling
      this.value = !this.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }
}

export interface CheckboxConfig {
  controlName: string;
  label: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  required: boolean;
  
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
  checkIcon?: string;
  iconColor?: string;
}
