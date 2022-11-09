import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonsComponent } from './add-dons.component';

describe('AddDonsComponent', () => {
  let component: AddDonsComponent;
  let fixture: ComponentFixture<AddDonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
