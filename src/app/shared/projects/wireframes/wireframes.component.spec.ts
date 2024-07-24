import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WireframesComponent } from './wireframes.component';

describe('WireframesComponent', () => {
  let component: WireframesComponent;
  let fixture: ComponentFixture<WireframesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WireframesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WireframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
