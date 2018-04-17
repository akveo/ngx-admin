import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoGradoComponent } from './trabajo-grado.component';

describe('TrabajoGradoComponent', () => {
  let component: TrabajoGradoComponent;
  let fixture: ComponentFixture<TrabajoGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoGradoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
