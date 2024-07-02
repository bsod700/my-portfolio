import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  value: string = '';
  onChange = (value: string) => {};
  onTouched = () => {};

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
    // Handle the disabled state if necessary
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value;
      this.onChange(this.value);
      this.onTouched();
    }
  }
}

export interface InputTextConfig {
  controlName: string;
  label: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  ariaLabelledBy?: string;
  required: boolean;

  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  iconLeft?: string;
  iconRight?: string;
}
