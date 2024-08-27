import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRowComponent } from './cards-row.component';

describe('CardsRowComponent', () => {
  let component: CardsRowComponent;
  let fixture: ComponentFixture<CardsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
