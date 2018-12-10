import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotconnectedComponent } from './notconnected.component';

describe('NotconnectedComponent', () => {
  let component: NotconnectedComponent;
  let fixture: ComponentFixture<NotconnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotconnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
