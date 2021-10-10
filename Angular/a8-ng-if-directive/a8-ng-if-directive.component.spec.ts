import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A8NgIfDirectiveComponent } from './a8-ng-if-directive.component';

describe('A8NgIfDirectiveComponent', () => {
  let component: A8NgIfDirectiveComponent;
  let fixture: ComponentFixture<A8NgIfDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A8NgIfDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A8NgIfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
