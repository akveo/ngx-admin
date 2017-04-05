import { InjectionToken } from '@angular/core';

export interface NgaAuthOptions {
  providers?: any;
}

export const NgaAuthOptionsToken = new InjectionToken<NgaAuthOptions>('NGA_AUTH_OPTIONS');
