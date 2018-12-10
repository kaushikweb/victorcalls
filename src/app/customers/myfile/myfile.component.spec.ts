import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfileComponent } from './myfile.component';

describe('MyfileComponent', () => {
  let component: MyfileComponent;
  let fixture: ComponentFixture<MyfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
