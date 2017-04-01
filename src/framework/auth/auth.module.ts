import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// TODO: how should we link modules together?
import { NgaLayoutModule } from '../theme/components/layout/layout.module';
import { NgaAuthOptions } from './auth.options';
import { NgaAuthPageComponent } from './pages/auth/auth-page.component';
import { NgaLoginPageComponent } from './pages/login/login-page.component';
import { NgaRegisterPageComponent } from './pages/register/register-page.component';
import { NgaRequestPasswordPageComponent } from './pages/request-password/request-password-page.component';
import { NgaResetPasswordPageComponent } from './pages/reset-password/reset-password-page.component';

import { routes } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    NgaLayoutModule,
    RouterModule.forChild(routes),
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
    };
  }
}
