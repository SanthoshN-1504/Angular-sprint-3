import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralListFlatComponent } from './general-list-flat.component';

describe('GeneralListFlatComponent', () => {
  let component: GeneralListFlatComponent;
  let fixture: ComponentFixture<GeneralListFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralListFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralListFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
