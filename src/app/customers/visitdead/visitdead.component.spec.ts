import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitdeadComponent } from './visitdead.component';

describe('VisitdeadComponent', () => {
  let component: VisitdeadComponent;
  let fixture: ComponentFixture<VisitdeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitdeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitdeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
