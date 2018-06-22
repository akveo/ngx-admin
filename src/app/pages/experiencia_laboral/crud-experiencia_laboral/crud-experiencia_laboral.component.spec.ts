/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CrudExperienciaLaboralComponent } from './crud-experiencia_laboral.component';

describe('CrudExperienciaLaboralComponent', () => {
  let component: CrudExperienciaLaboralComponent;
  let fixture: ComponentFixture<CrudExperienciaLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudExperienciaLaboralComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
