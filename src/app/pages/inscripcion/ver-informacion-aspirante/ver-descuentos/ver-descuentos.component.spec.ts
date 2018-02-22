import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDescuentosComponent } from './ver-descuentos.component';

describe('VerDescuentosComponent', () => {
  let component: VerDescuentosComponent;
  let fixture: ComponentFixture<VerDescuentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDescuentosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDescuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
