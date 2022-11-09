import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestInscriptionComponent } from './guest-inscription.component';

describe('GuestInscriptionComponent', () => {
  let component: GuestInscriptionComponent;
  let fixture: ComponentFixture<GuestInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
