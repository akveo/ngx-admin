/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { InjectionToken } from '@angular/core';

export interface NgaThemeOptions {
  name: string;
}

export const ngaThemeOptionsToken = new InjectionToken<NgaThemeOptions>('NGA_THEME_OPTIONS');
