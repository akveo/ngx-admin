import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasComponent } from './idiomas.component';

describe('IdiomasComponent', () => {
  let component: IdiomasComponent;
  let fixture: ComponentFixture<IdiomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomasComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
