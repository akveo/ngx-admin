import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { NgxLoginComponent } from './login/login.component';
import { NgxRegisterComponent } from './register/register.component';
import { NbFirebasePasswordStrategyOptions } from './auth-firebase.config';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          
          login: {
            redirect: {
              success: '/dashboard',
              failure: null, // stay on the same page
            },
          },

          register: {
            redirect: {
              success: '/auth/login',
              failure: null, // stay on the same page
            },
          },
          ...new NbFirebasePasswordStrategyOptions()
        }),
      ],
      forms: {},
    }),
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    NgxRegisterComponent
  ],
})
export class NgxAuthModule {
}