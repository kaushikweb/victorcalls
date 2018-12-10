import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecompaniesComponent } from './managecompanies.component';

describe('ManagecompaniesComponent', () => {
  let component: ManagecompaniesComponent;
  let fixture: ComponentFixture<ManagecompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
