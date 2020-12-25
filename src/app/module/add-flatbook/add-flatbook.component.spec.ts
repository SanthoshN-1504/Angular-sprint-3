import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlatbookComponent } from './add-flatbook.component';

describe('AddFlatbookComponent', () => {
  let component: AddFlatbookComponent;
  let fixture: ComponentFixture<AddFlatbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlatbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlatbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
