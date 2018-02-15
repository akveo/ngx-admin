import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoInscripcionesComponent } from './estado-inscripciones.component';

describe('EstadoInscripcionesComponent', () => {
  let component: EstadoInscripcionesComponent;
  let fixture: ComponentFixture<EstadoInscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoInscripcionesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
