import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotCountComponent } from './plot-count.component';

describe('PlotCountComponent', () => {
  let component: PlotCountComponent;
  let fixture: ComponentFixture<PlotCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
