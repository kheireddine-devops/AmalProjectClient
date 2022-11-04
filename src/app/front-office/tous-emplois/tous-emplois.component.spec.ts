import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousEmploisComponent } from './tous-emplois.component';

describe('TousEmploisComponent', () => {
  let component: TousEmploisComponent;
  let fixture: ComponentFixture<TousEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
