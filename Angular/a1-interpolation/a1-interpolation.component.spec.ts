import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1InterpolationComponent } from './a1-interpolation.component';

describe('A1InterpolationComponent', () => {
  let component: A1InterpolationComponent;
  let fixture: ComponentFixture<A1InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A1InterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A1InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
