import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicformComponent } from './dinamicform.component';

describe('DinamicformComponent', () => {
  let component: DinamicformComponent;
  let fixture: ComponentFixture<DinamicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
