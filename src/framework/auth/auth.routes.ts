/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Routes } from '@angular/router';

import { NgaAuthPageComponent } from './pages/auth/auth-page.component';
import { NgaLoginPageComponent } from './pages/login/login-page.component';
import { NgaRegisterPageComponent } from './pages/register/register-page.component';
import { NgaRequestPasswordPageComponent } from './pages/request-password/request-password-page.component';
import { NgaResetPasswordPageComponent } from './pages/reset-password/reset-password-page.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: NgaAuthPageComponent,
    children: [
      {
        path: '',
        component: NgaLoginPageComponent,
      },
      {
        path: 'login',
        component: NgaLoginPageComponent,
      },
      {
        path: 'register',
        component: NgaRegisterPageComponent,
      },
      {
        path: 'request-password',
        component: NgaRequestPasswordPageComponent,
      },
      {
        path: 'reset-password',
        component: NgaResetPasswordPageComponent,
      },
    ],
  },
];
