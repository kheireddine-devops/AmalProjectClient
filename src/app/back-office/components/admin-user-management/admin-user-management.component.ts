import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GenericUser, UsersService} from "../../../core/services/users.service";
import {Admin, Beneficier, Benevole, Doctor, Organization, RoleEnum, User} from "../../../core/entities/users";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {AdminEditUsersDialogComponent} from "../dialogs/admin-edit-users-dialog/admin-edit-users-dialog.component";
import {
  AdminConfirmDeleteUserDialogComponent
} from "../dialogs/admin-confirm-delete-user-dialog/admin-confirm-delete-user-dialog.component";
import {
  AdminUserDetailsDialogComponent
} from "../dialogs/admin-user-details-dialog/admin-user-details-dialog.component";

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminUserManagementComponent implements OnInit , AfterViewInit {

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  users: Array<GenericUser<Beneficier | Benevole | Doctor | Organization | Admin>> = [];
  dataSource: MatTableDataSource<GenericUser<Beneficier | Benevole | Doctor | Organization | Admin>> = new MatTableDataSource();
  constructor(private usersService: UsersService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(value => {
      console.log(value);
      this.users = value;
      this.dataSource = new MatTableDataSource<GenericUser<Beneficier | Benevole | Doctor | Organization | Admin>>(value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.error(error);
    })
  }

  displayedColumns: string[] = ['name', 'email','role', 'action'];


  ngAfterViewInit(): void {

  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onClick($event: GenericUser<Beneficier | Benevole | Doctor | Organization | Admin>) {
    console.log($event)
  }

  onUserDetails(userId: number) {
    const dialogRef = this.dialog.open(AdminUserDetailsDialogComponent, {
      width: "850px",
      data: {
        userId: userId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`AdminUserDetailsDialogComponent result: ${result}`);
    });
  }

  onDeleteUser(userId: number) {
    const dialogRef = this.dialog.open(AdminConfirmDeleteUserDialogComponent, {
      width: "350px",
      data: {
        userId: userId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`AdminConfirmDeleteUserDialogComponent result: ${result}`);
      this.ngOnInit();
    });
  }

  onEditUser(userId: number,role: RoleEnum) {
    let dialogMode: DialogMode | undefined = undefined;
    switch (role) {
      case RoleEnum.DOCTOR: dialogMode = DialogMode.EDIT_DOCTOR; break;
      case RoleEnum.BENEVOLE: dialogMode = DialogMode.EDIT_BENEVOLE; break;
      case RoleEnum.BENEFICIER: dialogMode = DialogMode.EDIT_BENEFICIER; break;
      case RoleEnum.ORGANIZATION: dialogMode = DialogMode.EDIT_ORGANIZATION; break;
    }
    const dialogRef = this.dialog.open(AdminEditUsersDialogComponent, {
      width: "650px",
      minHeight: "400px",
      data: {
        userId: userId,
        mode: dialogMode,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`AdminEditUsersDialogComponent result: ${result}`);
      this.ngOnInit();
    });
  }

  onAddUser(dialogMode: string) {
    const dialogRef = this.dialog.open(AdminEditUsersDialogComponent, {
      width: "650px",
      minHeight: "400px",
      data: {
        userId: undefined,
        mode: (dialogMode as DialogMode)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`AdminEditUsersDialogComponent result: ${result}`);
      this.ngOnInit();
    });
  }
}

export enum DialogMode {
  ADD_DOCTOR="ADD_DOCTOR",
  EDIT_DOCTOR="EDIT_DOCTOR",
  ADD_BENEVOLE="ADD_BENEVOLE",
  EDIT_BENEVOLE="EDIT_BENEVOLE",
  ADD_BENEFICIER="ADD_BENEFICIER",
  EDIT_BENEFICIER="EDIT_BENEFICIER",
  ADD_ORGANIZATION="ADD_ORGANIZATION",
  EDIT_ORGANIZATION="EDIT_ORGANIZATION",
  ADD_ANY_USER="ADD_ANY_USER",
  EDIT_ANY_USER="EDIT_ANY_USER"
}
