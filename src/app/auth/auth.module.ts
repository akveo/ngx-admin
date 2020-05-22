  
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule, NbCardModule } from '@nebular/theme';

import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,

    NbAuthModule,
    
    CommonModule,
    HttpClientModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    AppRoutingModule,

    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',

          alwaysFail: true,
          delay: 1000,
        }),
      ],
    }),
  ],
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
})
export class AuthModule {
}