import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsHelpComponent } from './comments-help.component';

describe('CommentsHelpComponent', () => {
  let component: CommentsHelpComponent;
  let fixture: ComponentFixture<CommentsHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
