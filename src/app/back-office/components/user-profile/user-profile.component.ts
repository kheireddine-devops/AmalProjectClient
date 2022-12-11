import { Component, OnInit } from '@angular/core';
import {UserEditPhotoComponent} from "../dialogs/user-edit-photo/user-edit-photo.component";
import {MatDialog} from "@angular/material/dialog";
import {Account, Beneficier, Benevole, Doctor, Organization, RoleEnum, User} from "../../../core/entities/users";
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

  user: User | undefined;
  beneficier: Beneficier | undefined;
  benevole: Benevole | undefined;
  doctor: Doctor | undefined;
  organization: Organization | undefined;
  name: string = "";
  constructor(public dialog: MatDialog,
              private _accountService: AccountService,
              private _usersService: UsersService) { }

  ngOnInit(): void {
    this.mode = this._accountService.getRole();
    if (this.mode !== undefined) {
      this._accountService.getCurrentUser().subscribe((account: Account) => {
        this.currentAccount = account;

        if(this.currentAccount.id_compte !== undefined && this.currentAccount.role !== undefined) {
          this._usersService.getAnyUserById(this.currentAccount.id_compte, this.currentAccount.role).subscribe(value => {

            if (account.role == RoleEnum.ORGANIZATION) {
              this.name = (value as Organization).name;
              this.organization = (value as Organization);
            } else {

              this._usersService.getUserById(account.id_compte).subscribe(user => {
                this.user = user;
                this.name = this.user.firstname + " " + this.user.lastname;

                switch (account.role) {
                  case RoleEnum.DOCTOR:
                    this.doctor = (value as Doctor);
                    break;
                  case RoleEnum.BENEVOLE:
                    this.benevole = (value as Benevole);
                    break;
                  case RoleEnum.BENEFICIER:
                    this.beneficier = (value as Beneficier);
                    break;
                }

              }, error => {

              });


            }


          });
        }

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
