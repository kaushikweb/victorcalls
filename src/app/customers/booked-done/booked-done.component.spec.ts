import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedDoneComponent } from './booked-done.component';

describe('BookedDoneComponent', () => {
  let component: BookedDoneComponent;
  let fixture: ComponentFixture<BookedDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
