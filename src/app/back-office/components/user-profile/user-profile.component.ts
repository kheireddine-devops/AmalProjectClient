import { Component, OnInit } from '@angular/core';
import {UserEditPhotoComponent} from "../dialogs/user-edit-photo/user-edit-photo.component";
import {MatDialog} from "@angular/material/dialog";
import {Account, RoleEnum} from "../../../core/entities/users";
import {UsersService} from "../../../core/services/users.service";
import {AccountService} from "../../../core/services/account.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  URL = `${environment.url}/images/users/`;
  mode: RoleEnum | undefined;
  currentAccount: Account | undefined;
  constructor(public dialog: MatDialog,private _accountService: AccountService,private _usersService: UsersService) { }

  ngOnInit(): void {
    this.mode = this._accountService.getRole();
    if (this.mode !== undefined) {
      this._accountService.getCurrentUser().subscribe((account: Account) => {
        this.currentAccount = account;
      });
    }
  }

  onEditPhoto() {
    const dialogRef = this.dialog.open(UserEditPhotoComponent, {
      width: "650px",
      data: {
        userId: this.currentAccount?.id_compte,
        currentImage: (this.currentAccount?.photo) ? `${this.URL}/${this.currentAccount?.photo}`: 'assets/images/users/USER-UNKNOWN.jpg'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`AdminUserDetailsDialogComponent result: ${result}`);
    });
  }


}
