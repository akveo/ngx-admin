import { InjectionToken } from '@angular/core';

export interface NgaAuthOptions {
  providers?: any;
}

export interface NgaAuthProviders {
  [key: string]: any;
}

export const ngaAuthOptionsToken = new InjectionToken<NgaAuthOptions>('NGA_AUTH_OPTIONS');
export const ngaAuthProvidersToken = new InjectionToken<NgaAuthProviders>('NGA_AUTH_OPTIONS');
