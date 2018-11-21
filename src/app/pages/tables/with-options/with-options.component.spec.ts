import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOptionsComponent } from './with-options.component';

describe('WithOptionsComponent', () => {
  let component: WithOptionsComponent;
  let fixture: ComponentFixture<WithOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
