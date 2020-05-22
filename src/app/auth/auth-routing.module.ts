
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
    
  {
    path: '',
    component: AuthComponent,
    children: [
        {
          path: 'login',
          component: LoginComponent,
        },
      ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth.module').then(m => m.AuthModule),
  },
//   {
//     path: '',
//     component: NbAuthComponent,
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent,
//       },
//     ],
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}