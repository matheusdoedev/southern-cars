import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsHeadComponent } from './cars-head.component';

describe('CarsHeadComponent', () => {
  let component: CarsHeadComponent;
  let fixture: ComponentFixture<CarsHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
