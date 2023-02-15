/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HoverEnlargeImageComponent } from './hover-enlarge-image.component';

describe('HoverEnlargeImageComponent', () => {
  let component: HoverEnlargeImageComponent;
  let fixture: ComponentFixture<HoverEnlargeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverEnlargeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEnlargeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
