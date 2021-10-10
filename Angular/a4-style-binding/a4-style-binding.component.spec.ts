import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4StyleBindingComponent } from './a4-style-binding.component';

describe('A4StyleBindingComponent', () => {
  let component: A4StyleBindingComponent;
  let fixture: ComponentFixture<A4StyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A4StyleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A4StyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
