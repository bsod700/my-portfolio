import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Cta, Img } from '@core/index';
import { CheckboxConfig } from '../form/checkbox/checkbox.component';
import { InputTextConfig } from '../form/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { GetIconComponent } from '../get-icon/get-icon.component';
import { EmailService } from '@core/services/email.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GetIconComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)
  emailService: EmailService = inject(EmailService);
  @Input() formConfig!: ContactFormConfig;
  form!: FormGroup;

  contactSuccess: boolean = false;
  contactError: boolean = false;
  isLoading: boolean = false;

  submitted = false;

  submit() {
    this.submitted = true;
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.isLoading = true;
      this.emailService.sendEmail(this.form.value).subscribe({
        next: (response) => {
          console.log('Email sent successfully', response);
          this.contactSuccess = true;
          this.form.reset();
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.contactError = true;
          this.isLoading = false;
          this.cdr.markForCheck();
          console.error('Error sending email', error);
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.submitted = false;
      console.log('Form is not valid');
      alert('Please fill all required fields correctly.');
    }
  }
  constructor() {
    this.form = this.fb.group({
      looking: this.fb.array([], this.minSelectedCheckboxes(1)),
      email: new FormControl('', [Validators.required, Validators.email]),
      name:  new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get looking() {
    return this.form.get('looking');
  }

  minSelectedCheckboxes(min = 1): ValidatorFn {
    const validator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
      const formArray = control as FormArray;
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => next ? prev + 1 : prev, 0);

      return totalSelected >= min ? null : { required: true };
    };
    return validator;
  }

  onCheckboxChange(event: any): void {
    
    let checkboxesArr = this.form.get('looking') as FormArray;
    // const checkboxElement = event.target as HTMLInputElement;

    if (event.target.checked) {
      checkboxesArr.push(new FormControl(event.target.value))
    } else {
      checkboxesArr.controls.forEach((checkbox, index) => {
        if (checkbox.value === event.target.value) {
          checkboxesArr.removeAt(index);
          return
        }
      })
    }
    // console.log(event.target.checked);

  }

  getErrorMessage(controlName: string): string[] {
    const control = this.form.get(controlName);
    if (control && control.errors && control.touched) {
      if (control.errors['required']) {
        return [`${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`];
      }
      if (control.errors['email']) {
        return ['Please enter a valid email'];
      }
    }
    return [];
  }

  shouldShake(controlName: string): boolean | undefined {
    const control = this.form.get(controlName);
    return control?.invalid && control.touched && this.submitted;
  }
}

export interface ContactFormConfig {
  checkboxesTitle: string;
  checkboxesControlName: string;
  checkboxes?: CheckboxConfig[];
  inputTexts?: InputTextConfig[];
  cta: Cta;
  success: {
    img: Img;
    title: string;
    subtitle: string;
  },
  error: {
    exitIcon: string;
    title: string;
    paragraph: string;
    cta: {
      href: string;
      text: string;
      iconRight: string;
    }
  }
}

