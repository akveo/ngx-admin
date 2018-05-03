/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListEstadoCivilComponent } from './list-estado_civil.component';

describe('ListEstadoCivilComponent', () => {
  let component: ListEstadoCivilComponent;
  let fixture: ComponentFixture<ListEstadoCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEstadoCivilComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEstadoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
