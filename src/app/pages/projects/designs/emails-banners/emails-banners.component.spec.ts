import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsBannersComponent } from './emails-banners.component';

describe('EmailsBannersComponent', () => {
  let component: EmailsBannersComponent;
  let fixture: ComponentFixture<EmailsBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailsBannersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
