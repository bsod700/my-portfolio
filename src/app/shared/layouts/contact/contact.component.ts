import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { ContactFormComponent, ContactFormConfig } from '@shared/components/contact-form/contact-form.component';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';
import { ModalButtonConfig } from '@shared/components/modal-button/modal-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, GetIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @Input() componentConfig!: ContactConfig;
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef)
  formSubmitted: boolean = false;

  onFormSubmitted(formSubmitted: boolean) {
    this.formSubmitted = formSubmitted;
    this.cdr.markForCheck();
  }
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  description: string;
  help: ModalButtonConfig;
  form: ContactFormConfig;
}
