import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTrabajoGradoComponent } from './ver-trabajo-grado.component';

describe('VerTrabajoGradoComponent', () => {
  let component: VerTrabajoGradoComponent;
  let fixture: ComponentFixture<VerTrabajoGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTrabajoGradoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTrabajoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
