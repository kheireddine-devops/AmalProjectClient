import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogComponentComponent } from './add-dialog-component.component';

describe('AddDialogComponentComponent', () => {
  let component: AddDialogComponentComponent;
  let fixture: ComponentFixture<AddDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
