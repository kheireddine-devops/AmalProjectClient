import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationConfirmerComponent } from './reservation-confirmer.component';

describe('ReservationConfirmerComponent', () => {
  let component: ReservationConfirmerComponent;
  let fixture: ComponentFixture<ReservationConfirmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationConfirmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationConfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
