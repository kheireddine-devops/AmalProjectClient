import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaidebenifComponent } from './addaidebenif.component';

describe('AddaidebenifComponent', () => {
  let component: AddaidebenifComponent;
  let fixture: ComponentFixture<AddaidebenifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaidebenifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaidebenifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
