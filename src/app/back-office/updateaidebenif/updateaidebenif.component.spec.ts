import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaidebenifComponent } from './updateaidebenif.component';

describe('UpdateaidebenifComponent', () => {
  let component: UpdateaidebenifComponent;
  let fixture: ComponentFixture<UpdateaidebenifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaidebenifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaidebenifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
