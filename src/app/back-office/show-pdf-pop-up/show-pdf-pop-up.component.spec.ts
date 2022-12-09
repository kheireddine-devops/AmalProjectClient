import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPDFPopUpComponent } from './show-pdf-pop-up.component';

describe('ShowPDFPopUpComponent', () => {
  let component: ShowPDFPopUpComponent;
  let fixture: ComponentFixture<ShowPDFPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPDFPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPDFPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
