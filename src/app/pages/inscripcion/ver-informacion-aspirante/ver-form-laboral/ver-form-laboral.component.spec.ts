import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFormacionLaboralComponent } from './ver-form-laboral.component';

describe('VerFormacionLaboralComponent', () => {
  let component: VerFormacionLaboralComponent;
  let fixture: ComponentFixture<VerFormacionLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFormacionLaboralComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFormacionLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
