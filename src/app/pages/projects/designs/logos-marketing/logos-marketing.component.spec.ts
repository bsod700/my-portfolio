import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosMarketingComponent } from './logos-marketing.component';

describe('LogosMarketingComponent', () => {
  let component: LogosMarketingComponent;
  let fixture: ComponentFixture<LogosMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogosMarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
