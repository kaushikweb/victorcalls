import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitonComponent } from './visiton.component';

describe('VisitonComponent', () => {
  let component: VisitonComponent;
  let fixture: ComponentFixture<VisitonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
