import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushalongComponent } from './brushalong.component';

describe('BrushalongComponent', () => {
  let component: BrushalongComponent;
  let fixture: ComponentFixture<BrushalongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrushalongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrushalongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
