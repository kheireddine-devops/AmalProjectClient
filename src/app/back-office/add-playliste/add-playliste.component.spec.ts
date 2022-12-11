import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaylisteComponent } from './add-playliste.component';

describe('AddPlaylisteComponent', () => {
  let component: AddPlaylisteComponent;
  let fixture: ComponentFixture<AddPlaylisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlaylisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaylisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
