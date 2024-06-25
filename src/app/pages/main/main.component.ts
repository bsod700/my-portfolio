import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Main, MainConfigService } from './main-config.service';
import { NavbarComponent } from '@shared/index';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  config!: Main;
  private mainConfigService = inject(MainConfigService);

  ngOnInit() {
    this.config = this.mainConfigService.getPageConfig();
  }
}
