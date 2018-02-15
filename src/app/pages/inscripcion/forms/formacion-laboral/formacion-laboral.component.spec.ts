import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionLaboralComponent } from './formacion-laboral.component';

describe('FormacionLaboralComponent', () => {
  let component: FormacionLaboralComponent;
  let fixture: ComponentFixture<FormacionLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionLaboralComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
