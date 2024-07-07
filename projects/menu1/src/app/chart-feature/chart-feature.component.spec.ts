import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFeatureComponent } from './chart-feature.component';

describe('ChartFeatureComponent', () => {
  let component: ChartFeatureComponent;
  let fixture: ComponentFixture<ChartFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartFeatureComponent]
    });
    fixture = TestBed.createComponent(ChartFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
