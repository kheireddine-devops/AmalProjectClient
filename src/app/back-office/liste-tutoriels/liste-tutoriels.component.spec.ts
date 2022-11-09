import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTutorielsComponent } from './liste-tutoriels.component';

describe('ListeTutorielsComponent', () => {
  let component: ListeTutorielsComponent;
  let fixture: ComponentFixture<ListeTutorielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTutorielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTutorielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
