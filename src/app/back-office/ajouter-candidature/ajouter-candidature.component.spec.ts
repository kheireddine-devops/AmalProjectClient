import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCandidatureComponent } from './ajouter-candidature.component';

describe('AjouterCandidatureComponent', () => {
  let component: AjouterCandidatureComponent;
  let fixture: ComponentFixture<AjouterCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
