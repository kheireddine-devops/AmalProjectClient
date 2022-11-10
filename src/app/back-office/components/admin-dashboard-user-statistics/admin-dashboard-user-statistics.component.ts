import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-user-statistics',
  templateUrl: './admin-dashboard-user-statistics.component.html',
  styleUrls: ['./admin-dashboard-user-statistics.component.css']
})
export class AdminDashboardUserStatisticsComponent implements OnInit {
  usersData = [
    { name: "Organization", value: 283 },
    { name: "Benevole", value: 892 },
    { name: "Beneficier", value: 3985 },
    { name: "Doctor", value: 87 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
