import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinInscripcionComponent } from './fin-inscripcion.component';

describe('FinInscripcionComponent', () => {
  let component: FinInscripcionComponent;
  let fixture: ComponentFixture<FinInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinInscripcionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
