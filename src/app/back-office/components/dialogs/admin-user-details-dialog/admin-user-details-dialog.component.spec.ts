import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserDetailsDialogComponent } from './admin-user-details-dialog.component';

describe('AdminUserDetailsDialogComponent', () => {
  let component: AdminUserDetailsDialogComponent;
  let fixture: ComponentFixture<AdminUserDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
