import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeareaComponent } from './codearea.component';

describe('CodeareaComponent', () => {
  let component: CodeareaComponent;
  let fixture: ComponentFixture<CodeareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeareaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
