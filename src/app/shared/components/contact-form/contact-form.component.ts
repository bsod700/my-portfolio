import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cta } from '@core/index';
import { CheckboxComponent, CheckboxConfig } from '../form/checkbox/checkbox.component';
import { InputTextConfig, TextInputComponent } from '../form/text-input/text-input.component';
import { CtaComponent } from '../cta/cta.component';
import { DynamicImageComponent } from '../dynamic-image/dynamic-image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent, TextInputComponent, CtaComponent, DynamicImageComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  @Input() formConfig!: ContactFormConfig;
  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    const formControls: { [key: string]: FormControl } = {};

    this.formConfig.checkboxes?.forEach(checkbox => {
      formControls[checkbox.controlName] = new FormControl(false);
    });

    this.formConfig.inputTexts?.forEach(input => {
      if(input.controlName === 'email') {
        formControls[input.controlName] =  new FormControl('', [Validators.required, Validators.email]);
      } else {
        formControls[input.controlName] = new FormControl('', [Validators.required]);
      }
    });

    this.form = this.fb.group(formControls);
  }

  submit() {
    console.log(this.form.value);
  }
}

export interface ContactFormConfig {
  checkboxesTitle: string;
  checkboxes?: CheckboxConfig[];
  inputTexts?: InputTextConfig[];
  cta: Cta;
}
