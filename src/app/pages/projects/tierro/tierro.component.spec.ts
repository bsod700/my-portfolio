import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierroComponent } from './tierro.component';

describe('TierroComponent', () => {
  let component: TierroComponent;
  let fixture: ComponentFixture<TierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
