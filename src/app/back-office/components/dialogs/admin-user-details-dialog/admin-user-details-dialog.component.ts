import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UsersService} from "../../../../core/services/users.service";
import {Account, Beneficier, Benevole, Doctor, Organization, RoleEnum, User} from "../../../../core/entities/users";

@Component({
  selector: 'app-admin-user-details-dialog',
  templateUrl: './admin-user-details-dialog.component.html',
  styleUrls: ['./admin-user-details-dialog.component.css']
})
export class AdminUserDetailsDialogComponent implements OnInit {

  account: Account | undefined;
  userBeneficier: Beneficier | undefined;
  userBenevole: Benevole | undefined;
  userDoctor: Doctor | undefined;
  userOrganization: Organization | undefined;
  name: string = "";
  constructor(public dialogRef: MatDialogRef<AdminUserDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userId: number},
              private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getAccountById(this.data.userId)
      .subscribe(account => {

       if(account.id_compte !== undefined && account.role !== undefined) {
            this.account = account;
         this._usersService.getUserById(account.id_compte,account.role).subscribe(value => {
           switch (account.role) {
             case RoleEnum.ORGANIZATION:
               this.name = (value as Organization).name;
               this.userOrganization = (value as Organization);
               break;
             case RoleEnum.DOCTOR:
               this.userDoctor = (value as Doctor);
               this.name = (value as User).firstname + " " + (value as User).lastname
               break;
             case RoleEnum.BENEVOLE:
               this.userBenevole = (value as Benevole);
               this.name = (value as User).firstname + " " + (value as User).lastname
               break;
             case RoleEnum.BENEFICIER:
               this.userBeneficier = (value as Beneficier);
               this.name = (value as User).firstname + " " + (value as User).lastname
               break;
           }
         });
       }
      });
  }

}
