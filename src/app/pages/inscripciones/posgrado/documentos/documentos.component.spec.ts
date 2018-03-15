import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosComponent } from './documentos.component';

describe('DocumentosComponent', () => {
  let component: DocumentosComponent;
  let fixture: ComponentFixture<DocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
