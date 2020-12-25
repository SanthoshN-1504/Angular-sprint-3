import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordLoginComponent } from './landlord-login.component';

describe('LandlordLoginComponent', () => {
  let component: LandlordLoginComponent;
  let fixture: ComponentFixture<LandlordLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
