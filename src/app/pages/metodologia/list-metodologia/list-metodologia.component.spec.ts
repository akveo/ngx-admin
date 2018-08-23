/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListMetodologiaComponent } from './list-metodologia.component';

describe('ListMetodologiaComponent', () => {
  let component: ListMetodologiaComponent;
  let fixture: ComponentFixture<ListMetodologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMetodologiaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMetodologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
