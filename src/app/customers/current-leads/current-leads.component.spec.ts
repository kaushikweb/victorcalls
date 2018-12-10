import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLeadsComponent } from './current-leads.component';

describe('CurrentLeadsComponent', () => {
  let component: CurrentLeadsComponent;
  let fixture: ComponentFixture<CurrentLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
