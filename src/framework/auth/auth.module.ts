import { NgModule, ModuleWithProviders, Injector, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// TODO: how should we link modules together?
import { NgaLayoutModule } from '../theme/components/layout/layout.module';

import { NgaAuthService } from './services/auth.service';
import { NgaDummyAuthProvider } from './providers/dummy-auth.provider';
import { NgaEmailPassAuthProvider } from './providers/email-pass-auth.provider';

import { NgaAuthOptions, NgaAuthOptionsToken } from './auth.options';
import { NgaAuthPageComponent } from './pages/auth/auth-page.component';
import { NgaLoginPageComponent } from './pages/login/login-page.component';
import { NgaRegisterPageComponent } from './pages/register/register-page.component';
import { NgaLogoutPageComponent } from './pages/logout/logout-page.component';
import { NgaRequestPasswordPageComponent } from './pages/request-password/request-password-page.component';
import { NgaResetPasswordPageComponent } from './pages/reset-password/reset-password-page.component';

import { routes } from './auth.routes';
import { NgaTokenService } from './services/token.service';

export function ngaAuthServiceFactory(config: any, tokenService: NgaTokenService, injector: Injector) {
  const providers = config.providers || {};

  for (const key in providers) {
    if (providers.hasOwnProperty(key)) {
      const provider = providers[key];
      provider.object = injector.get(provider.service);
      provider.object.setConfig(provider.config || {});
    }
  }
  return new NgaAuthService(providers, tokenService);
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
    NgaLogoutPageComponent,
  ],
  exports: [
    NgaAuthPageComponent,
    NgaLoginPageComponent,
    NgaRegisterPageComponent,
    NgaRequestPasswordPageComponent,
    NgaResetPasswordPageComponent,
    NgaLogoutPageComponent,
  ],
})
export class NgaAuthModule {

  constructor(@Optional() @SkipSelf() parentModule: NgaAuthModule) {
    if (parentModule) {
      throw new Error('NgaAuthModule is already loaded. Import it in the AppModule only.');
    }
  }

  static forRoot(ngaAuthOptions?: NgaAuthOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaAuthModule,
      providers: [
        { provide: NgaAuthOptionsToken, useValue: ngaAuthOptions },
        { provide: NgaAuthService, useFactory: ngaAuthServiceFactory, deps: [NgaAuthOptionsToken, NgaTokenService, Injector] },
        NgaTokenService,
        NgaDummyAuthProvider,
        NgaEmailPassAuthProvider,
      ],
    };
  }
}
