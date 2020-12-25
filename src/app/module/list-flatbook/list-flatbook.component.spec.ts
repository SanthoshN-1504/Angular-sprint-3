import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlatbookComponent } from './list-flatbook.component';

describe('ListFlatbookComponent', () => {
  let component: ListFlatbookComponent;
  let fixture: ComponentFixture<ListFlatbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFlatbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFlatbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
