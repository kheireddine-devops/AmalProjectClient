import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../core/services/users.service";

@Component({
  selector: 'app-admin-dashboard-user-statistics',
  templateUrl: './admin-dashboard-user-statistics.component.html',
  styleUrls: ['./admin-dashboard-user-statistics.component.css']
})
export class AdminDashboardUserStatisticsComponent implements OnInit {
  usersData:Array<{name: string, value: number}> = [];
  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getNumberOfUsersByRole().subscribe(value => {
      this.usersData = value;
    })
  }

}
