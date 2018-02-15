import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupComponent } from './mockup.component';

describe('MockupComponent', () => {
  let component: MockupComponent;
  let fixture: ComponentFixture<MockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockupComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
