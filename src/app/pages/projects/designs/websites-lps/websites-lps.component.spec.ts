import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesLpsComponent } from './websites-lps.component';

describe('WebsitesLpsComponent', () => {
  let component: WebsitesLpsComponent;
  let fixture: ComponentFixture<WebsitesLpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsitesLpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitesLpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
