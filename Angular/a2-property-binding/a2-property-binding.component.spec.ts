import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2PropertyBindingComponent } from './a2-property-binding.component';

describe('A2PropertyBindingComponent', () => {
  let component: A2PropertyBindingComponent;
  let fixture: ComponentFixture<A2PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A2PropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A2PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
