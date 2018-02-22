import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesComponent } from './inscripciones.component';

describe('InscripcionesComponent', () => {
  let component: InscripcionesComponent;
  let fixture: ComponentFixture<InscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
