/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgaAuthModule, NgaEmailPassAuthProvider } from '@nga/auth';

import { NgaMenuItem, NgaSearchModule, NgaThemeModule } from '@nga/theme';
import { NgaActionsModule } from '@nga/theme/components/actions/actions.module';
import { NgaCardModule } from '@nga/theme/components/card/card.module';
import { NgaLayoutModule } from '@nga/theme/components/layout/layout.module';
import { NgaMenuModule } from '@nga/theme/components/menu/menu.module';
import { NgaRouteTabsetModule } from '@nga/theme/components/route-tabset/route-tabset.module';
import { NgaSidebarModule } from '@nga/theme/components/sidebar/sidebar.module';
import { NgaTabsetModule } from '@nga/theme/components/tabset/tabset.module';
import { NgaUserModule } from '@nga/theme/components/user/user.module';
import { List } from 'immutable';
import { NgaActionsTestComponent } from './actions-test/actions-test.component';

import { NgaAppComponent } from './app.component';

import { routes } from './app.routes';
import { NgaBootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';
import { NgaCardTestComponent } from './card-test/card-test.component';
import { NgaFormsTestComponent } from './forms-test/forms-test.component';
import { NgaLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';
import { NgaLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NgaLayoutTestComponent } from './layout-test/layout-test.component';
import { NgaThemeChangeTestComponent } from './layout-test/theme-change-test.component';
import { NgaDynamicToAddComponent, NgaThemeDynamicTestComponent } from './layout-test/theme-dynamic-test.component';
import {
  NgaMenuItem1Component,
  NgaMenuItem2Component,
  NgaMenuItem31Component,
  NgaMenuItem32Component,
  NgaMenuItem331Component,
  NgaMenuItem332Component,
  NgaMenuItem33Component,
  NgaMenuItem3Component,
  NgaMenuItem4Component,
  NgaMenuTestComponent,
} from './menu-test/menu-test.component';
import {
  NgaRouteTabsetTestChild1Component,
  NgaRouteTabsetTestChild2Component,
  NgaRouteTabsetTestComponent,
} from './route-tabset-test/route-tabset-test.component';

import { NgaSearchTestComponent } from './search-test/search-test.component';
import { NgaSidebarTestOneComponent } from './sidebar-test/sidebar-test-one.component';
import { NgaSidebarTestThreeComponent } from './sidebar-test/sidebar-test-three.component';
import { NgaSidebarTestTwoComponent } from './sidebar-test/sidebar-test-two.component';

import { NgaSidebarTestComponent } from './sidebar-test/sidebar-test.component';
import { NgaTabsetTestComponent } from './tabset-test/tabset-test.component';
import { NgaUserTestComponent } from './user-test/user-test.component';

const NGA_TEST_COMPONENTS = [
  NgaAppComponent,
  NgaCardTestComponent,
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
  NgaActionsTestComponent,
  NgaFormsTestComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot({ name: 'cosmic' }),
    NgaCardModule,
    NgaLayoutModule,
    NgaMenuModule.forRoot({
      items: List<NgaMenuItem>([{
        title: 'Menu #4',
        link: '/menu/4',
        icon: 'ion ion-ionic',
      }, {
        title: 'Menu #5',
        icon: 'ion ion-ionic',
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
