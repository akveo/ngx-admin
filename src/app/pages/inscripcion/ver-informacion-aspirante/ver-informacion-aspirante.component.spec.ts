import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInformacionAspiranteComponent } from './ver-informacion-aspirante.component';

describe('VerInformacionAspiranteComponent', () => {
  let component: VerInformacionAspiranteComponent;
  let fixture: ComponentFixture<VerInformacionAspiranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInformacionAspiranteComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInformacionAspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
