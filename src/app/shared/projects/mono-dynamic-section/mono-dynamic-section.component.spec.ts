import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonoDynamicSectionComponent } from './mono-dynamic-section.component';


describe('DynamicSection2Component', () => {
  let component: MonoDynamicSectionComponent;
  let fixture: ComponentFixture<MonoDynamicSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonoDynamicSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonoDynamicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
