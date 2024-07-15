import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBulletsComponent } from './section-bullets.component';

describe('SectionBulletsComponent', () => {
  let component: SectionBulletsComponent;
  let fixture: ComponentFixture<SectionBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBulletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
