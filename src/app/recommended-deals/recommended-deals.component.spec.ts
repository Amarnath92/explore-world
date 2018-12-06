import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedDealsComponent } from './recommended-deals.component';

describe('RecommendedDealsComponent', () => {
  let component: RecommendedDealsComponent;
  let fixture: ComponentFixture<RecommendedDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
