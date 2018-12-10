import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleComponent } from './resale.component';

describe('ResaleComponent', () => {
  let component: ResaleComponent;
  let fixture: ComponentFixture<ResaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
