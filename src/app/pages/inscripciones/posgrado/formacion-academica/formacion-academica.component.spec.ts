import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionAcademicaComponent } from './formacion-academica.component';

describe('FormacionAcademicaComponent', () => {
  let component: FormacionAcademicaComponent;
  let fixture: ComponentFixture<FormacionAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionAcademicaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
