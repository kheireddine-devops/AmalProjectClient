import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UsersService} from "../../../../core/services/users.service";
import {Account, Beneficier, Benevole, Doctor, Organization, RoleEnum, User} from "../../../../core/entities/users";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-admin-user-details-dialog',
  templateUrl: './admin-user-details-dialog.component.html',
  styleUrls: ['./admin-user-details-dialog.component.css']
})
export class AdminUserDetailsDialogComponent implements OnInit {

  URL = `${environment.url}/images/users/`;

  account: Account | undefined;
  user: User | undefined;
  beneficier: Beneficier | undefined;
  benevole: Benevole | undefined;
  doctor: Doctor | undefined;
  organization: Organization | undefined;
  name: string = "";
  constructor(public dialogRef: MatDialogRef<AdminUserDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userId: number},
              private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getAccountById(this.data.userId)
      .subscribe(account => {

       if(account.id_compte !== undefined && account.role !== undefined) {
            this.account = account;
         this._usersService.getAnyUserById(account.id_compte,account.role).subscribe(value => {

           if(account.role == RoleEnum.ORGANIZATION) {
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
