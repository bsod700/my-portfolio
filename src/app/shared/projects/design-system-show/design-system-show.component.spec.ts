import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemShowComponent } from './design-system-show.component';

describe('DesignSystemShowComponent', () => {
  let component: DesignSystemShowComponent;
  let fixture: ComponentFixture<DesignSystemShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSystemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
