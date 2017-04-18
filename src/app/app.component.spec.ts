import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemeSpinner } from './theme/services';
import { BaThemeConfigProvider } from './theme/theme.configProvider';
import { BaThemeConfig } from './theme/theme.config';

describe(`App`, () => {
  let comp: App;
  let fixture: ComponentFixture<App>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [GlobalState, BaImageLoaderService, BaThemeSpinner, BaThemeConfigProvider, BaThemeConfig]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(App);
    comp    = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });
});
