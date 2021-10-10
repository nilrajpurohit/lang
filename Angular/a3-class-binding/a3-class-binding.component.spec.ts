import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A3ClassBindingComponent } from './a3-class-binding.component';

describe('A3ClassBindingComponent', () => {
  let component: A3ClassBindingComponent;
  let fixture: ComponentFixture<A3ClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A3ClassBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A3ClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
