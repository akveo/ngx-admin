import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgaThemeModule } from '../framework/theme';

import { AppComponent } from './app.component';
import { NgaCardTestComponent } from './card-test/card-test.component';
import { NgaLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NgaLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';
import { NgaTabsetTestComponent } from './tabset-test/tabset-test.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NgaCardTestComponent,
    NgaLayoutHeaderTestComponent,
    NgaLayoutFooterTestComponent,
    NgaTabsetTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
