import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehelpComponent } from './updatehelp.component';

describe('UpdatehelpComponent', () => {
  let component: UpdatehelpComponent;
  let fixture: ComponentFixture<UpdatehelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
