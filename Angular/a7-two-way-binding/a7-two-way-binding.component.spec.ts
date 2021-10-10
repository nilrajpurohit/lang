import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A7TwoWayBindingComponent } from './a7-two-way-binding.component';

describe('A7TwoWayBindingComponent', () => {
  let component: A7TwoWayBindingComponent;
  let fixture: ComponentFixture<A7TwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A7TwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A7TwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
