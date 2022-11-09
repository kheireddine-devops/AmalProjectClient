import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGuestContactComponent } from './admin-guest-contact.component';

describe('AdminGuestContactComponent', () => {
  let component: AdminGuestContactComponent;
  let fixture: ComponentFixture<AdminGuestContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGuestContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGuestContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
