/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListGeneroComponent } from './list-genero.component';

describe('ListGeneroComponent', () => {
  let component: ListGeneroComponent;
  let fixture: ComponentFixture<ListGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGeneroComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
