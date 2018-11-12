import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewInfoPersonaComponent } from './view-info-persona.component';

describe('ViewInfoPersonaComponent', () => {
  let component: ViewInfoPersonaComponent;
  let fixture: ComponentFixture<ViewInfoPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInfoPersonaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInfoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
