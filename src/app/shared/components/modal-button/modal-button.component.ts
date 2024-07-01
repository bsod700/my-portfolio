import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  standalone: true,
  imports: [],
  templateUrl: './modal-button.component.html',
  styleUrl: './modal-button.component.scss'
})
export class ModalButtonComponent {

}

export interface ModalButtonConfig {
  icon: string;
  modal: {
    title: string;
    subtitle: string;
    video?: string;
  }
}
