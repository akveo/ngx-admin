/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListEnfasisComponent } from './list-enfasis.component';

describe('ListEnfasisComponent', () => {
  let component: ListEnfasisComponent;
  let fixture: ComponentFixture<ListEnfasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnfasisComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnfasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
