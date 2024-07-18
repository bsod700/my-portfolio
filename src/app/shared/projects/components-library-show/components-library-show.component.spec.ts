import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLibraryShowComponent } from './components-library-show.component';

describe('ComponentsLibraryShowComponent', () => {
  let component: ComponentsLibraryShowComponent;
  let fixture: ComponentFixture<ComponentsLibraryShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsLibraryShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsLibraryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
