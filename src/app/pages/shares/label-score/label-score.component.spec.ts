/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabelScoreComponent } from './label-score.component';

describe('LabelScoreComponent', () => {
  let component: LabelScoreComponent;
  let fixture: ComponentFixture<LabelScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
