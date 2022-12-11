import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProduitComponent } from './store-produit.component';

describe('StoreProduitComponent', () => {
  let component: StoreProduitComponent;
  let fixture: ComponentFixture<StoreProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
