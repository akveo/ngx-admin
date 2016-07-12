/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from '../../app/app.routes';


// Angular 2 forms
import {disableDeprecatedForms, provideForms} from '@angular/forms';

/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
  // new Angular 2 forms
  disableDeprecatedForms(),
  provideForms(),
  ...HTTP_PROVIDERS,
  ...APP_ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
