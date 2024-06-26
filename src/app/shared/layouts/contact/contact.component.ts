import { Component, Input } from '@angular/core';
import { ModalButtonConfig } from '@shared/components/modal-button/modal-button.component';
import { ContactFormComponent, ContactFormConfig } from '@shared/index';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() componentConfig!: ContactConfig;

}

export interface ContactConfig {
  title: string;
  subtitle: string;
  description: string;
  help: ModalButtonConfig;
  form: ContactFormConfig;
}
