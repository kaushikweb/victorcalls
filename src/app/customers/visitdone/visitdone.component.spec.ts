import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitdoneComponent } from './visitdone.component';

describe('VisitdoneComponent', () => {
  let component: VisitdoneComponent;
  let fixture: ComponentFixture<VisitdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
