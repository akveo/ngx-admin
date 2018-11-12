/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ListInfoCaracteristicaComponent } from './list-info_caracteristica.component';

describe('ListInfoCaracteristicaComponent', () => {
  let component: ListInfoCaracteristicaComponent;
  let fixture: ComponentFixture<ListInfoCaracteristicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfoCaracteristicaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfoCaracteristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
