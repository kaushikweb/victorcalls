import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCountComponent } from './rent-count.component';

describe('RentCountComponent', () => {
  let component: RentCountComponent;
  let fixture: ComponentFixture<RentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
