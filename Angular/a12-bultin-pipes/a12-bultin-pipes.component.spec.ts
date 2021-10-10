import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A12BultinPipesComponent } from './a12-bultin-pipes.component';

describe('A12BultinPipesComponent', () => {
  let component: A12BultinPipesComponent;
  let fixture: ComponentFixture<A12BultinPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A12BultinPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A12BultinPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
