import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedocumentComponent } from './createdocument.component';

describe('CreatedocumentComponent', () => {
  let component: CreatedocumentComponent;
  let fixture: ComponentFixture<CreatedocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
