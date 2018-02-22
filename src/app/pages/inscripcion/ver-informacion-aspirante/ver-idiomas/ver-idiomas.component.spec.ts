import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerIdiomasComponent } from './ver-idiomas.component';

describe('VerIdiomasComponent', () => {
  let component: VerIdiomasComponent;
  let fixture: ComponentFixture<VerIdiomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerIdiomasComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
