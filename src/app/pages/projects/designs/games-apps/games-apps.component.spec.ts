import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAppsComponent } from './games-apps.component';

describe('GamesAppsComponent', () => {
  let component: GamesAppsComponent;
  let fixture: ComponentFixture<GamesAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
