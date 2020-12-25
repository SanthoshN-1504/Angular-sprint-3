import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatbookingComponent } from './flatbooking.component';

describe('FlatbookingComponent', () => {
  let component: FlatbookingComponent;
  let fixture: ComponentFixture<FlatbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
