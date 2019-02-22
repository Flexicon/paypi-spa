import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDataFormComponent } from './additional-data-form.component';

describe('AdditionalDataFormComponent', () => {
  let component: AdditionalDataFormComponent;
  let fixture: ComponentFixture<AdditionalDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
