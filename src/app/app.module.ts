/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { List } from 'immutable';

import { NgaThemeModule } from '@akveo/nga-theme';
import { NgaCardModule } from '@akveo/nga-theme';
import { NgaLayoutModule } from '@akveo/nga-theme';
import { NgaMenuModule } from '@akveo/nga-theme';
import { NgaRouteTabsetModule } from '@akveo/nga-theme';
import { NgaSidebarModule } from '@akveo/nga-theme';
import { NgaTabsetModule } from '@akveo/nga-theme';
import { NgaUserModule } from '@akveo/nga-theme';
import { NgaAuthModule, NgaDummyAuthProvider, NgaEmailPassAuthProvider } from '@akveo/nga-auth';
import { NgaActionsModule } from '@akveo/nga-theme';
import { NgaSearchModule } from '@akveo/nga-theme';
import { NgaMenuItem } from '@akveo/nga-theme';

import { NgaAppComponent } from './app.component';
import { NgaLayoutTestComponent } from './layout-test/layout-test.component';
import { NgaLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NgaLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';
import { NgaThemeChangeTestComponent } from './layout-test/theme-change-test.component';
import { NgaThemeBreakpointTestComponent } from './layout-test/theme-breakpoint-test.component';
import { NgaTabsetTestComponent } from './tabset-test/tabset-test.component';
import {
  NgaRouteTabsetTestComponent,
  NgaRouteTabsetTestChild1Component,
  NgaRouteTabsetTestChild2Component,
} from './route-tabset-test/route-tabset-test.component';

import { NgaSidebarTestComponent } from './sidebar-test/sidebar-test.component';
import { NgaSidebarTestOneComponent } from './sidebar-test/sidebar-test-one.component';
import { NgaSidebarTestTwoComponent } from './sidebar-test/sidebar-test-two.component';
import { NgaSidebarTestThreeComponent } from './sidebar-test/sidebar-test-three.component';
import {
  NgaMenuTestComponent,
  NgaMenuItem1Component,
  NgaMenuItem2Component,
  NgaMenuItem31Component,
  NgaMenuItem3Component,
  NgaMenuItem32Component,
  NgaMenuItem33Component,
  NgaMenuItem331Component,
  NgaMenuItem332Component,
  NgaMenuItem4Component,
} from './menu-test/menu-test.component';
import { NgaUserTestComponent } from './user-test/user-test.component';
import { NgaThemeDynamicTestComponent, NgaDynamicToAddComponent } from './layout-test/theme-dynamic-test.component';
import { NgaActionsTestComponent } from './actions-test/actions-test.component';
import { NgaBootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

import { routes } from './app.routes';

import { NgaSearchTestComponent } from './search-test/search-test.component';
import { NgaFormsTestComponent } from './forms-test/forms-test.component';

import { CardComponent } from './card/card.component';

const NGA_TEST_COMPONENTS = [
  NgaAppComponent,
  CardComponent,
  NgaLayoutTestComponent,
  NgaLayoutHeaderTestComponent,
  NgaLayoutFooterTestComponent,
  NgaTabsetTestComponent,
  NgaSidebarTestComponent,
  NgaSidebarTestOneComponent,
  NgaSidebarTestTwoComponent,
  NgaSidebarTestThreeComponent,
  NgaRouteTabsetTestComponent,
  NgaRouteTabsetTestChild1Component,
  NgaRouteTabsetTestChild2Component,
  NgaMenuTestComponent,
  NgaMenuItem1Component,
  NgaMenuItem2Component,
  NgaMenuItem3Component,
  NgaMenuItem31Component,
  NgaMenuItem32Component,
  NgaMenuItem33Component,
  NgaMenuItem331Component,
  NgaMenuItem332Component,
  NgaMenuItem4Component,
  NgaUserTestComponent,
  NgaThemeChangeTestComponent,
  NgaSearchTestComponent,
  NgaBootstrapTestComponent,
  NgaDynamicToAddComponent,
  NgaThemeDynamicTestComponent,
  NgaThemeBreakpointTestComponent,
  NgaActionsTestComponent,
  NgaFormsTestComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot({ name: 'default' }),
    NgaCardModule,
    NgaLayoutModule,
    NgaMenuModule.forRoot({
      items: List<NgaMenuItem>([{
        title: 'Menu #4',
        link: '/menu/4',
      }, {
        title: 'Menu #5',
      }]),
    }),
    NgaRouteTabsetModule,
    NgaSidebarModule.forRoot(),
    NgaTabsetModule,
    NgaUserModule,
    NgaSearchModule,
    NgaActionsModule,
    NgaAuthModule.forRoot({
      providers: {
        //
        // email: {
        //   service: NgaDummyAuthProvider,
        //   config: {
        //     alwaysFail: true,
        //     delay: 1000,
        //   },
        // },
        email: {
          service: NgaEmailPassAuthProvider,
          config: {
            login: {
              endpoint: 'http://localhost:4400/api/auth/login',
            },
            register: {
              endpoint: 'http://localhost:4400/api/auth/register',
            },
            logout: {
              endpoint: 'http://localhost:4400/api/auth/logout',
              redirect: {
                success: '/auth/login',
                failure: '/auth/login',
              },
            },
            requestPass: {
              endpoint: 'http://localhost:4400/api/auth/request-pass',
              redirect: {
                success: '/auth/reset-password',
              },
            },
            resetPass: {
              endpoint: 'http://localhost:4400/api/auth/reset-pass',
              redirect: {
                success: '/auth/login',
              },
            },
          },
        },
      },
    }),
  ],
  declarations: [
    ...NGA_TEST_COMPONENTS,
  ],
  entryComponents: [
    NgaDynamicToAddComponent,
  ],
  providers: [],
  bootstrap: [NgaAppComponent],
})
export class AppModule {
}
