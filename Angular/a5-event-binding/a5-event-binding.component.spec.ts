import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A5EventBindingComponent } from './a5-event-binding.component';

describe('A5EventBindingComponent', () => {
  let component: A5EventBindingComponent;
  let fixture: ComponentFixture<A5EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A5EventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A5EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
