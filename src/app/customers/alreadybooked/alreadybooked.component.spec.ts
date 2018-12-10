import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadybookedComponent } from './alreadybooked.component';

describe('AlreadybookedComponent', () => {
  let component: AlreadybookedComponent;
  let fixture: ComponentFixture<AlreadybookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadybookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadybookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
