import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A6TemplateReferenceVariableComponent } from './a6-template-reference-variable.component';

describe('A6TemplateReferenceVariableComponent', () => {
  let component: A6TemplateReferenceVariableComponent;
  let fixture: ComponentFixture<A6TemplateReferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A6TemplateReferenceVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A6TemplateReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
