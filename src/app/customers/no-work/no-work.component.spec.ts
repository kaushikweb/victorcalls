import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoWorkComponent } from './no-work.component';

describe('NoWorkComponent', () => {
  let component: NoWorkComponent;
  let fixture: ComponentFixture<NoWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
