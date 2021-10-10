import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A10NgforDirectiveComponent } from './a10-ngfor-directive.component';

describe('A10NgforDirectiveComponent', () => {
  let component: A10NgforDirectiveComponent;
  let fixture: ComponentFixture<A10NgforDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A10NgforDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A10NgforDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
