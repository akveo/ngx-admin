/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTipoDiscapacidadComponent } from './list-tipo_discapacidad.component';

describe('ListTipoDiscapacidadComponent', () => {
  let component: ListTipoDiscapacidadComponent;
  let fixture: ComponentFixture<ListTipoDiscapacidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTipoDiscapacidadComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoDiscapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
