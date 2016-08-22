/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
/*
 * Platform and Environment
 * our providers/directives/pipes
 */
import { PLATFORM_PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';


/*
 * App Component
 * our top level component that holds all of our components
 */
import { App, APP_PROVIDERS } from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    // To add more vendor providers please look in the platform/ folder
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS,
  ])
    .then(decorateComponentRef)
    .catch(err => console.error(err));

}


/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `npm install @types/x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
