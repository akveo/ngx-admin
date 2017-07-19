/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ngaMediaBreakpointsToken, NgaThemeOptions, ngaThemeOptionsToken } from './theme.options';
import { NgaThemeService } from './services/theme.service';
import { NgaSpinnerService } from './services/spinner.service';
import { NgaThemeConfig } from './services/themeConfig.service';
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
   * @param ngaMediaBreakpoints {NgaMediaBreakpoint} Available media breakpoins
   *
   * @returns {ModuleWithProviders}
   */
  static forRoot(ngaThemeOptions: NgaThemeOptions, ngaMediaBreakpoints?: NgaMediaBreakpoint[]): ModuleWithProviders {
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
        { provide: ngaMediaBreakpointsToken, useValue: ngaMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
        NgaThemeConfig,
        NgaThemeService,
        NgaMediaBreakpointsService,
        NgaSpinnerService,
      ],
    };
  }
}
