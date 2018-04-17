import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaQrComponent } from './prueba-qr.component';

describe('PruebaQrComponent', () => {
  let component: PruebaQrComponent;
  let fixture: ComponentFixture<PruebaQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaQrComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
