import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardRouteComponent } from './wild-card-route.component';

describe('WildCardRouteComponent', () => {
  let component: WildCardRouteComponent;
  let fixture: ComponentFixture<WildCardRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildCardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
