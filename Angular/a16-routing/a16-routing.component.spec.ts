import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A16RoutingComponent } from './a16-routing.component';

describe('A16RoutingComponent', () => {
  let component: A16RoutingComponent;
  let fixture: ComponentFixture<A16RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A16RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A16RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
