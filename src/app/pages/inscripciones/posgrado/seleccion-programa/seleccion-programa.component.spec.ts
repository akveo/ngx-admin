import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionProgramaComponent } from './seleccion-programa.component';

describe('SeleccionProgramaComponent', () => {
  let component: SeleccionProgramaComponent;
  let fixture: ComponentFixture<SeleccionProgramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionProgramaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
