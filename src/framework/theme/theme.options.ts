/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { InjectionToken } from '@angular/core';
import { NgaMediaBreakpoint } from './services/breakpoints.service';

export interface NgaThemeOptions {
  name: string;
}

export const ngaThemeOptionsToken = new InjectionToken<NgaThemeOptions>('NGA_THEME_OPTIONS');
export const ngaMediaBreakpointsToken = new InjectionToken<NgaMediaBreakpoint[]>('NGA_MEDIA_BREAKPOINTS');
