import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAspirantesComponent } from './ver-aspirantes.component';

describe('VerAspirantesComponent', () => {
  let component: VerAspirantesComponent;
  let fixture: ComponentFixture<VerAspirantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAspirantesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAspirantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
