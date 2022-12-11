import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesPlaylistComponent } from './listes-playlist.component';

describe('ListesPlaylistComponent', () => {
  let component: ListesPlaylistComponent;
  let fixture: ComponentFixture<ListesPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
