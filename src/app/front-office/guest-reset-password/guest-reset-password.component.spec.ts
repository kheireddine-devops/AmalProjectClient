import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestResetPasswordComponent } from './guest-reset-password.component';

describe('GuestResetPasswordComponent', () => {
  let component: GuestResetPasswordComponent;
  let fixture: ComponentFixture<GuestResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
