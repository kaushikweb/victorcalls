import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoworkComponent } from './nowork.component';

describe('NoworkComponent', () => {
  let component: NoworkComponent;
  let fixture: ComponentFixture<NoworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
