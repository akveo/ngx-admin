/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListLugarUbicacionComponent } from './list-lugar_ubicacion.component';

describe('ListLugarUbicacionComponent', () => {
  let component: ListLugarUbicacionComponent;
  let fixture: ComponentFixture<ListLugarUbicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLugarUbicacionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLugarUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
