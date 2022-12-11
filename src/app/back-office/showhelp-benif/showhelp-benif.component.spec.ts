import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhelpBenifComponent } from './showhelp-benif.component';

describe('ShowhelpBenifComponent', () => {
  let component: ShowhelpBenifComponent;
  let fixture: ComponentFixture<ShowhelpBenifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowhelpBenifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhelpBenifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
