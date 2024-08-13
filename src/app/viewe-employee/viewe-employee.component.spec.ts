import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweEmployeeComponent } from './viewe-employee.component';

describe('VieweEmployeeComponent', () => {
  let component: VieweEmployeeComponent;
  let fixture: ComponentFixture<VieweEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieweEmployeeComponent]
    });
    fixture = TestBed.createComponent(VieweEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
