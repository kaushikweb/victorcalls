import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIntegrationsComponent } from './manage-integrations.component';

describe('ManageIntegrationsComponent', () => {
  let component: ManageIntegrationsComponent;
  let fixture: ComponentFixture<ManageIntegrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIntegrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
