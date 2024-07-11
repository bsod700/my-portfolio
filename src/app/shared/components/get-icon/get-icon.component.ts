import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-get-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-icon.component.html',
  styleUrl: './get-icon.component.scss'
})
export class GetIconComponent {
  @Input() icon!: string | undefined;
  @Input() iconColor!: string | undefined;
}
