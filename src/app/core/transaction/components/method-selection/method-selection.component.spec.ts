import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodSelectionComponent } from './method-selection.component';

describe('MethodSelectionComponent', () => {
  let component: MethodSelectionComponent;
  let fixture: ComponentFixture<MethodSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
