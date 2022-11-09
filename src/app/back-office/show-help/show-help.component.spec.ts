import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHelpComponent } from './show-help.component';

describe('ShowHelpComponent', () => {
  let component: ShowHelpComponent;
  let fixture: ComponentFixture<ShowHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
