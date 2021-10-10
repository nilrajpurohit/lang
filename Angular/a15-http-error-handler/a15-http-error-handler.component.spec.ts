import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A15HttpErrorHandlerComponent } from './a15-http-error-handler.component';

describe('A15HttpErrorHandlerComponent', () => {
  let component: A15HttpErrorHandlerComponent;
  let fixture: ComponentFixture<A15HttpErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A15HttpErrorHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A15HttpErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
