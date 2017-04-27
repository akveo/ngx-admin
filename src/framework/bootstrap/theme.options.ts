import { InjectionToken } from '@angular/core';

export interface NgaThemeOptions {
  name: string;
}

export const ngaThemeOptionsToken = new InjectionToken<NgaThemeOptions>('NGA_THEME_OPTIONS');
