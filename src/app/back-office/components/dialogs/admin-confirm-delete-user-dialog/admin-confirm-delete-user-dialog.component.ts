import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UsersService} from "../../../../core/services/users.service";
import {Organization, RoleEnum, User} from "../../../../core/entities/users";

@Component({
  selector: 'app-admin-confirm-delete-user-dialog',
  templateUrl: './admin-confirm-delete-user-dialog.component.html',
  styleUrls: ['./admin-confirm-delete-user-dialog.component.css']
})
export class AdminConfirmDeleteUserDialogComponent implements OnInit {

  fullname: string = "";
  constructor(public dialogRef: MatDialogRef<AdminConfirmDeleteUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userId: number},
              private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getAccountById(this.data.userId)
      .subscribe(account => {
        if(account.id_compte !== undefined && account.role !== undefined) {
          this._usersService.getUserById(account.id_compte,account.role).subscribe(value => {
            if (account.role === RoleEnum.ORGANIZATION) {
              this.fullname = (value as Organization).name;
            } else {
              this.fullname = (value as User).firstname + ' ' + (value as User).lastname;
            }
          });
        }
      });
  }

  onDeleteUser(userId: number) {
    this._usersService.deleteAccountById(userId).subscribe(value => {
      console.log(value);
    });
  }
}
