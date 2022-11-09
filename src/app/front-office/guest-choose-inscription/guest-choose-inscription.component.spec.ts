import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestChooseInscriptionComponent } from './guest-choose-inscription.component';

describe('GuestChooseInscriptionComponent', () => {
  let component: GuestChooseInscriptionComponent;
  let fixture: ComponentFixture<GuestChooseInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestChooseInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestChooseInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
