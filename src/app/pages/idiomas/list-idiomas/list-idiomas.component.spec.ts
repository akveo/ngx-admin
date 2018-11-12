/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ListIdiomasComponent } from './list-idiomas.component';

describe('ListIdiomasComponent', () => {
  let component: ListIdiomasComponent;
  let fixture: ComponentFixture<ListIdiomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIdiomasComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
