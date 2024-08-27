import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBulletsComponent } from './dynamic-bullets.component';

describe('DynamicBulletsComponent', () => {
  let component: DynamicBulletsComponent;
  let fixture: ComponentFixture<DynamicBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicBulletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
