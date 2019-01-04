import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { NgxAuthModule } from '../auth/auth.module';
import { AnalyticsService } from './utils/analytics.service';

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        token: {
          class: NbAuthJWTToken,
          key: 'token', // this parameter tells where to look for the token
        },
        baseEndpoint: '',
            login: {
              endpoint: '/api/auth/tokens',
            },
            register: {
              endpoint: '/api/auth/users',
            },
            logout:
             { method: null, redirect: { success: '/', failure: '/' } },
        }),
    ],
    forms: {
      login: {
        redirectDelay: 0,
        rememberMe: false,
        showMessages: {
          success: false,
        },
      },
      register: {
        terms: false,
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
      logout: {
        redirectDelay: 0,
        strategy: 'email',
      },
      validation: {
        password: {
          required: true,
          minLength: 6,
          maxLength: 50,
        },
        email: {
          required: true,
        },
        fullName: {
          required: false,
        },
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
    NgxAuthModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
