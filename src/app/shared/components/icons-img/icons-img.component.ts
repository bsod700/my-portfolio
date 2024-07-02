import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-img',
  standalone: true,
  imports: [],
  templateUrl: './icons-img.component.html',
  styleUrl: './icons-img.component.scss'
})
export class IconsImgComponent {
  @Input() icon: string | undefined = '';
}
