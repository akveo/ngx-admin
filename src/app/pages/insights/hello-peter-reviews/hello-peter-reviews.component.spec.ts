import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPeterReviewsComponent } from './hello-peter-reviews.component';

describe('HelloPeterReviewsComponent', () => {
  let component: HelloPeterReviewsComponent;
  let fixture: ComponentFixture<HelloPeterReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloPeterReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPeterReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
