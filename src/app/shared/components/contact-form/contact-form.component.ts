import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Cta } from '@core/index';
import { CheckboxComponent, CheckboxConfig, CtaComponent, InputTextConfig, TextInputComponent } from '@shared/index';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent, TextInputComponent, CtaComponent],
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
      formControls[input.controlName] = new FormControl('');
    });

    this.form = this.fb.group(formControls);
  }

  submit() {
    console.log(this.form.value);
  }
}

export interface ContactFormConfig {
  checkboxes?: CheckboxConfig[];
  inputTexts?: InputTextConfig[];
  cta: Cta;
}
