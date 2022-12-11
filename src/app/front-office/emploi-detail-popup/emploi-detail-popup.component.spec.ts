import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDetailPopupComponent } from './emploi-detail-popup.component';

describe('EmploiDetailPopupComponent', () => {
  let component: EmploiDetailPopupComponent;
  let fixture: ComponentFixture<EmploiDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploiDetailPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
