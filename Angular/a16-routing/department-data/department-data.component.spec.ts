import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDataComponent } from './department-data.component';

describe('DepartmentDataComponent', () => {
  let component: DepartmentDataComponent;
  let fixture: ComponentFixture<DepartmentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
