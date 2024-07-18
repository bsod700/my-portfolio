import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsJumpComponent } from './sections-jump.component';

describe('SectionsJumpComponent', () => {
  let component: SectionsJumpComponent;
  let fixture: ComponentFixture<SectionsJumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionsJumpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
