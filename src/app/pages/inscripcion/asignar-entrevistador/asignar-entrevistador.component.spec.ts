import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEntrevistadorComponent } from './asignar-entrevistador.component';

describe('AsignarEntrevistadorComponent', () => {
  let component: AsignarEntrevistadorComponent;
  let fixture: ComponentFixture<AsignarEntrevistadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarEntrevistadorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEntrevistadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
