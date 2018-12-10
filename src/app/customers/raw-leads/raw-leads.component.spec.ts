import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawLeadsComponent } from './raw-leads.component';

describe('RawLeadsComponent', () => {
  let component: RawLeadsComponent;
  let fixture: ComponentFixture<RawLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
