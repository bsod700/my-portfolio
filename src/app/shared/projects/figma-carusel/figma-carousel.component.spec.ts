import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaCarouselComponent } from './figma-carousel.component';

describe('FigmaCarouselComponent', () => {
  let component: FigmaCarouselComponent;
  let fixture: ComponentFixture<FigmaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigmaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
