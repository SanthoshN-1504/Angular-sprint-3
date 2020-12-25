import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlatbookComponent } from './update-flatbook.component';

describe('UpdateFlatbookComponent', () => {
  let component: UpdateFlatbookComponent;
  let fixture: ComponentFixture<UpdateFlatbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlatbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlatbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
