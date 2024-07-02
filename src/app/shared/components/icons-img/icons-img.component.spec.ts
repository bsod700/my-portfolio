import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsImgComponent } from './icons-img.component';

describe('IconsImgComponent', () => {
  let component: IconsImgComponent;
  let fixture: ComponentFixture<IconsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
