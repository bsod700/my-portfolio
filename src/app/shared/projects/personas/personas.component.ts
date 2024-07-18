import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Img } from '@core/index';
import { GetIconComponent } from '@shared/components/get-icon/get-icon.component';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, GetIconComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonasComponent {
  @Input() componentConfig!: ProjectPersonasConfig;
}

export interface ProjectPersonasConfig {
  projectName: string;
  specialClass?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  personas: {
    personaImage: Img;
    personaName: string;
    personaBulletsSections: bullets[];
    bio: {
      title: string;
      bioContent: string;
    }
  }[]
}

interface bullets {
  bulletsTitle?: string;
  bullets: {
    bulletIcon?: string;
    bulletImage?: Img;
    bulletTitle?: string;
    bulletText?: string;
  }[];
}