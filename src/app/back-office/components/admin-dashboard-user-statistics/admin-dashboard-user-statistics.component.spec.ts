import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardUserStatisticsComponent } from './admin-dashboard-user-statistics.component';

describe('AdminDashboardUserStatisticsComponent', () => {
  let component: AdminDashboardUserStatisticsComponent;
  let fixture: ComponentFixture<AdminDashboardUserStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardUserStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardUserStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
