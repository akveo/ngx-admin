import { NgModule, ModuleWithProviders, InjectionToken, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// TODO: how should we link modules together?
import { NgaLayoutModule } from '../theme/components/layout/layout.module';

import { NgaAuthService } from './services/auth.service';
import { NgaDummyAuthProvider } from './providers/dummy-auth.provider';
import { NgaAuthOptions } from './auth.options';
import { NgaAuthPageComponent } from './pages/auth/auth-page.component';
import { NgaLoginPageComponent } from './pages/login/login-page.component';
import { NgaRegisterPageComponent } from './pages/register/register-page.component';
import { NgaRequestPasswordPageComponent } from './pages/request-password/request-password-page.component';
import { NgaResetPasswordPageComponent } from './pages/reset-password/reset-password-page.component';

import { routes } from './auth.routes';

export const NgaAuthOptionsToken = new InjectionToken<NgaAuthOptions>('NGA_AUTH_OPTIONS');

export function ngaAuthServiceFactory(config: any, injector: Injector) {
  const providers = config.providers || {};

  for (const key in providers) {
    if (providers.hasOwnProperty(key)) {
      const provider = providers[key];
      provider.object = injector.get(provider.service);
      provider.object.setConfig(provider.config || {});
    }
  }
  return new NgaAuthService(providers);
}

@NgModule({
  imports: [
    CommonModule,
    NgaLayoutModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [
    NgaAuthPageComponent,
    NgaLoginPageComponent,
    NgaRegisterPageComponent,
    NgaRequestPasswordPageComponent,
    NgaResetPasswordPageComponent,
  ],
})
export class NgaAuthModule {

  static forRoot(ngaAuthOptions?: NgaAuthOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaAuthModule,
      providers: [
        { provide: NgaAuthOptionsToken, useValue: ngaAuthOptions },
        { provide: NgaAuthService, useFactory: ngaAuthServiceFactory, deps: [NgaAuthOptionsToken, Injector] },
        NgaDummyAuthProvider,
      ],
    };
  }
}
