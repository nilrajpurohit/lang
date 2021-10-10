import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A9NgSwitchDirectiveComponent } from './a9-ng-switch-directive.component';

describe('A9NgSwitchDirectiveComponent', () => {
  let component: A9NgSwitchDirectiveComponent;
  let fixture: ComponentFixture<A9NgSwitchDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A9NgSwitchDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A9NgSwitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
