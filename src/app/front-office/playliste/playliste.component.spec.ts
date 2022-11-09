import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylisteComponent } from './playliste.component';

describe('PlaylisteComponent', () => {
  let component: PlaylisteComponent;
  let fixture: ComponentFixture<PlaylisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
