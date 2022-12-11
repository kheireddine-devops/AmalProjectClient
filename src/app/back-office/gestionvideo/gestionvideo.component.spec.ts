import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvideoComponent } from './gestionvideo.component';

describe('GestionvideoComponent', () => {
  let component: GestionvideoComponent;
  let fixture: ComponentFixture<GestionvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
