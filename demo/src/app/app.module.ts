/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgaThemeModule,
  NgaCardModule,
  NgaLayoutModule,
  NgaMenuModule,
  NgaRouteTabsetModule,
  NgaSidebarModule,
  NgaTabsetModule,
} from '@nga/theme';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgaThemeModule,
    NgaCardModule,
    NgaLayoutModule,
    NgaMenuModule,
    NgaRouteTabsetModule,
    NgaSidebarModule,
    NgaTabsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
