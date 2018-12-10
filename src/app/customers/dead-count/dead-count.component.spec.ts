import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadCountComponent } from './dead-count.component';

describe('DeadCountComponent', () => {
  let component: DeadCountComponent;
  let fixture: ComponentFixture<DeadCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
