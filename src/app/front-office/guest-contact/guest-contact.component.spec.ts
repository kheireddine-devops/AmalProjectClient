import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestContactComponent } from './guest-contact.component';

describe('GuestContactComponent', () => {
  let component: GuestContactComponent;
  let fixture: ComponentFixture<GuestContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
