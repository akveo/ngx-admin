import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDatosBasicosComponent } from './ver-datos-basicos.component';

describe('VerDatosBasicosComponent', () => {
  let component: VerDatosBasicosComponent;
  let fixture: ComponentFixture<VerDatosBasicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDatosBasicosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDatosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
