/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  NgaMenuModule,
  NgaSidebarModule,
  NgaThemeModule
} from '@nga/theme';

import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    NgaThemeModule.forRoot(),
    NgaSidebarModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    PagesModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
