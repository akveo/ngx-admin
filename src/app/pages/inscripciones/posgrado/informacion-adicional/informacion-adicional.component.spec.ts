import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAdicionalComponent } from './informacion-adicional.component';

describe('InformacionAdicionalComponent', () => {
  let component: InformacionAdicionalComponent;
  let fixture: ComponentFixture<InformacionAdicionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionAdicionalComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionAdicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
