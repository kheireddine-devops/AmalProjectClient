import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmDeleteUserDialogComponent } from './admin-confirm-delete-user-dialog.component';

describe('AdminConfirmDeleteUserDialogComponent', () => {
  let component: AdminConfirmDeleteUserDialogComponent;
  let fixture: ComponentFixture<AdminConfirmDeleteUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConfirmDeleteUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConfirmDeleteUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
