import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFormacionAcademicaComponent } from './ver-form-academ.component';

describe('VerFormacionAcademicaComponent', () => {
  let component: VerFormacionAcademicaComponent;
  let fixture: ComponentFixture<VerFormacionAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFormacionAcademicaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFormacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
