import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule, GetIconComponent],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextInputComponent,
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() config!: InputTextConfig;
  @Input() formControlName!: AbstractControl;

  value: any = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
  disabled: boolean = false;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: any) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }

  validate(c: AbstractControl): {[key: string]: any} | null {
    return c.valid ? null : { invalid: true }; 
  }

  onBlur() {
    this.onTouched();
  }

  get isValid() {
    return this.formControlName?.valid;
  }

  get error() {
    if (this.formControlName?.hasError('required')) {
      return 'This field is required';
    }
    // Add more error handling logic as needed
    return '';
  }

}

export interface InputTextConfig {
  controlName: string;
  type: string;
  label: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  ariaLabelledBy?: string;
  required: boolean;
  placeholder?: string;

  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
  iconColor?: string;
}
