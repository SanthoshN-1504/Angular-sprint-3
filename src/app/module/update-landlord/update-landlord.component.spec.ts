import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLandlordComponent } from './update-landlord.component';

describe('UpdateLandlordComponent', () => {
  let component: UpdateLandlordComponent;
  let fixture: ComponentFixture<UpdateLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLandlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
