/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrudEstadoAdmisionComponent } from './crud-estado_admision.component';

describe('CrudEstadoAdmisionComponent', () => {
  let component: CrudEstadoAdmisionComponent;
  let fixture: ComponentFixture<CrudEstadoAdmisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEstadoAdmisionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstadoAdmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
