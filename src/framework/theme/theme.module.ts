/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ngaBuiltInJSThemesToken,
  ngaMediaBreakpointsToken,
  NgaThemeOptions,
  ngaThemeOptionsToken,
  ngaJSThemesToken,
} from './theme.options';
import { NgaThemeService } from './services/theme.service';
import { NgaSpinnerService } from './services/spinner.service';
import { BUILT_IN_THEMES, NgaJSTheme, NgaJSThemesRegistry } from './services/js-themes-registry.service';
import {
  DEFAULT_MEDIA_BREAKPOINTS,
  NgaMediaBreakpoint,
  NgaMediaBreakpointsService,
} from './services/breakpoints.service';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ],
  exports: [
    NgbModule,
  ],
})
export class NgaThemeModule {

  // TODO: check the options (throw exception?)
  /**
   * Main Theme Module
   *
   * @param ngaThemeOptions {NgaThemeOptions} Main theme options
   * @param ngaJSThemes {NgaJSTheme[]} List of JS Themes, will be merged with default themes
   * @param ngaMediaBreakpoints {NgaMediaBreakpoint} Available media breakpoints
   *
   * @returns {ModuleWithProviders}
   */
  static forRoot(ngaThemeOptions: NgaThemeOptions,
                 ngaJSThemes?: NgaJSTheme[],
                 ngaMediaBreakpoints?: NgaMediaBreakpoint[]): ModuleWithProviders {

    return <ModuleWithProviders> {
      ngModule: NgaThemeModule,
      imports: [
        NgbModule.forRoot(),
      ],
      exports: [
        NgbModule,
      ],
      providers: [
        { provide: ngaThemeOptionsToken, useValue: ngaThemeOptions || {} },
        { provide: ngaBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
        { provide: ngaJSThemesToken, useValue: ngaJSThemes || [] },
        { provide: ngaMediaBreakpointsToken, useValue: ngaMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
        NgaJSThemesRegistry,
        NgaThemeService,
        NgaMediaBreakpointsService,
        NgaSpinnerService,
      ],
    };
  }
}
