import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditUsersDialogComponent } from './admin-edit-users-dialog.component';

describe('AdminEditUsersDialogComponent', () => {
  let component: AdminEditUsersDialogComponent;
  let fixture: ComponentFixture<AdminEditUsersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditUsersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
