import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPgComponent } from './dash-pg.component';

describe('DashPgComponent', () => {
  let component: DashPgComponent;
  let fixture: ComponentFixture<DashPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
