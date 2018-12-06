import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCategoryBannerComponent } from './trip-category-banner.component';

describe('TripCategoryBannerComponent', () => {
  let component: TripCategoryBannerComponent;
  let fixture: ComponentFixture<TripCategoryBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCategoryBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCategoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
