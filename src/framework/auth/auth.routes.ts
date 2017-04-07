/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Routes } from '@angular/router';

import { NgaAuthComponent } from './components/auth/auth.component';
import { NgaLoginComponent } from './components/login/login.component';
import { NgaRegisterComponent } from './components/register/register.component';
import { NgaLogoutComponent } from './components/logout/logout.component';
import { NgaRequestPasswordComponent } from './components/request-password/request-password.component';
import { NgaResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: NgaAuthComponent,
    children: [
      {
        path: '',
        component: NgaLoginComponent,
      },
      {
        path: 'login',
        component: NgaLoginComponent,
      },
      {
        path: 'register',
        component: NgaRegisterComponent,
      },
      {
        path: 'logout',
        component: NgaLogoutComponent,
      },
      {
        path: 'request-password',
        component: NgaRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NgaResetPasswordComponent,
      },
    ],
  },
];
