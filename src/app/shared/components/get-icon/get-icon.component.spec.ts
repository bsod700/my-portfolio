import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIconComponent } from './get-icon.component';

describe('GetIconComponent', () => {
  let component: GetIconComponent;
  let fixture: ComponentFixture<GetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
