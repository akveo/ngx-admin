<a name="1.0.0"></a>
# [1.0.0](https://github.com/akveo/ng2-admin/compare/v0.9.0...v1.0.0) (2017-04-27)


### Bug Fixes

* **build:** fix [#777](https://github.com/akveo/ng2-admin/issues/777) ([9bd7dbd](https://github.com/akveo/ng2-admin/commit/9bd7dbd))
* **build:** fix [#955](https://github.com/akveo/ng2-admin/issues/955) ([#961](https://github.com/akveo/ng2-admin/issues/961)) ([dd63535](https://github.com/akveo/ng2-admin/commit/dd63535))
* **build:** hopefully fix the prod & aot build errors ([#753](https://github.com/akveo/ng2-admin/issues/753)) ([7215b0b](https://github.com/akveo/ng2-admin/commit/7215b0b))
* **card:** fix [#962](https://github.com/akveo/ng2-admin/issues/962) ([#966](https://github.com/akveo/ng2-admin/issues/966)) ([72cb319](https://github.com/akveo/ng2-admin/commit/72cb319))
* **components:** add css pseudo-selector for dropdown arrow  ([#848](https://github.com/akveo/ng2-admin/issues/848)) ([1be434b](https://github.com/akveo/ng2-admin/commit/1be434b))
* **components:** add notification and message count from array length ([#893](https://github.com/akveo/ng2-admin/issues/893)) ([a8fe3f1](https://github.com/akveo/ng2-admin/commit/a8fe3f1))
* **dependencies:** fix [#689](https://github.com/akveo/ng2-admin/issues/689), [#688](https://github.com/akveo/ng2-admin/issues/688) ([d34e6e9](https://github.com/akveo/ng2-admin/commit/d34e6e9))
* **dependencies:** fix angular2-template-loader version ([2b25258](https://github.com/akveo/ng2-admin/commit/2b25258))
* **dependencies:** fix versions ([62810ae](https://github.com/akveo/ng2-admin/commit/62810ae))
* **dependencies:** fix versions ([5523029](https://github.com/akveo/ng2-admin/commit/5523029))
* **dependencies:** update dependencies, fix [#694](https://github.com/akveo/ng2-admin/issues/694), fix [#695](https://github.com/akveo/ng2-admin/issues/695) ([08de1f6](https://github.com/akveo/ng2-admin/commit/08de1f6))
* **docker:** fix [#712](https://github.com/akveo/ng2-admin/issues/712) ([cd7520e](https://github.com/akveo/ng2-admin/commit/cd7520e))
* **documents:** fix [#771](https://github.com/akveo/ng2-admin/issues/771) ([78c70ae](https://github.com/akveo/ng2-admin/commit/78c70ae))
* **editors:** fix an issue where ckeditor doesn't load on the demo ([0a4f40c](https://github.com/akveo/ng2-admin/commit/0a4f40c))
* **forms:** bad linking correction between label and input ([#886](https://github.com/akveo/ng2-admin/issues/886)) ([bb6ecd3](https://github.com/akveo/ng2-admin/commit/bb6ecd3))
* **maps:** fix [#813](https://github.com/akveo/ng2-admin/issues/813) ([b414eaf](https://github.com/akveo/ng2-admin/commit/b414eaf))
* **menu:** fix inactive menu item ([2468710](https://github.com/akveo/ng2-admin/commit/2468710))
* **package:** add the description fields ([0d77147](https://github.com/akveo/ng2-admin/commit/0d77147))
* **sidebar:** fix [#997](https://github.com/akveo/ng2-admin/issues/997) ([0a3c98e](https://github.com/akveo/ng2-admin/commit/0a3c98e))
* **style:** fix [#958](https://github.com/akveo/ng2-admin/issues/958) ([#963](https://github.com/akveo/ng2-admin/issues/963)) ([06d1b98](https://github.com/akveo/ng2-admin/commit/06d1b98))
* **tables:** fix [#1000](https://github.com/akveo/ng2-admin/issues/1000) ([#1001](https://github.com/akveo/ng2-admin/issues/1001)) ([4b98e0e](https://github.com/akveo/ng2-admin/commit/4b98e0e))
* **tables:** fix [#700](https://github.com/akveo/ng2-admin/issues/700) ([c85eae7](https://github.com/akveo/ng2-admin/commit/c85eae7))
* **tables:** fix [#704](https://github.com/akveo/ng2-admin/issues/704) ([0fbad7e](https://github.com/akveo/ng2-admin/commit/0fbad7e))
* **theme:** fix cards background of blur theme ([0528e2e](https://github.com/akveo/ng2-admin/commit/0528e2e))
* **ui:** fix NgbModal declaration ([49ff10e](https://github.com/akveo/ng2-admin/commit/49ff10e))
* **validator:** change email regex to: http://emailregex.com/ ([4470607](https://github.com/akveo/ng2-admin/commit/4470607))


### Features

* **angular-cli:** integrate angular-cli :tada: ([#989](https://github.com/akveo/ng2-admin/issues/989)) ([7932421](https://github.com/akveo/ng2-admin/commit/7932421))
* **dependencies:** update yarn.lock file, fix debugging ([cc97bf1](https://github.com/akveo/ng2-admin/commit/cc97bf1))
* **layouts:** add file uploader ([#842](https://github.com/akveo/ng2-admin/issues/842)) ([7d03461](https://github.com/akveo/ng2-admin/commit/7d03461))
* **localization:** implement the localization using ngx-translate ([#830](https://github.com/akveo/ng2-admin/issues/830)) ([627d62d](https://github.com/akveo/ng2-admin/commit/627d62d))
* **login:** add the locale changes ([#993](https://github.com/akveo/ng2-admin/issues/993)) ([e033edf](https://github.com/akveo/ng2-admin/commit/e033edf))
* **test:** add testing infrastructure: karma, jasmine and chrome ([#982](https://github.com/akveo/ng2-admin/issues/982)) ([4420048](https://github.com/akveo/ng2-admin/commit/4420048))


### BREAKING CHANGES

* The webpack version of ng2-admin was moved to webpack [branch](https://github.com/akveo/ng2-admin/tree/webpack).
* We dropped the electron support as, unfortunately, angular-cli doesn't have the official support of electron. Please consider using preview 'webpack' (link to webpack branch) version manually.


### How to migrate

1. Pull the latest ng2-admin version from **https://github.com/akveo/ng2-admin.git**;
2. Copy your **src/app, src/assets, src/custom-typings.d.ts** from webpack version into **src** folder in cli version;
3. Add each of your required modules and styles into **.angular-cli.json**;
5. Change paths to file(images, fonts, ets);
6. Add **import * as $ from 'jquery';** into **app.component.ts** in cli version;
7. Delete unused files in cli version: **.bootstraprc, postcss.config.js, tsconfig.webpack.js, typedoc.json, webpack.config.js, config/, docs/, src/custom-typings.d.ts, desktop, ts, src/main.browser.aot.ts, src/package.json, src/polyfills.browser.ts, src/vendor.browser.ts, src/app/environment.ts, src/app/index.ts, src/assets/service-worker.js**;
8. Change **style-loader** css import to ``styleUrls[‘./example.scss’]`` and wrap your sass styles into `:host /deep/ {}` expression.


**NOTE**: Sometimes you may have some individual issues with a concrete library, each such problem needs to be solved individually and can not be described in this guide.

<a name="0.9.0"></a>
# [0.9.0](https://github.com/akveo/ng2-admin/compare/v0.8.0...v0.9.0) (2017-01-30)

### Features

* Angular 2.4.4
* Dependencies updated
* [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) :tada:
* DLL bundles

### Bug Fixes

### How to use AOT

```bash
  npm run build:aot
  npm run server:prod
```

### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* replace `require` for templates and styles with `templateUrl` and `styleUrls`
* private, protected accessors should be changed to public for any members accessed from template
* replace default export on named export in modules
* remove ViewEncapsulation from components
* Enjoy!


<a name="0.8.0"></a>
# [0.8.0](https://github.com/akveo/ng2-admin/compare/v0.7.0...v0.8.0) (2016-11-25)

### Features

* Angular 2.2.3
* Dependencies updated

### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Enjoy!


<a name="0.7.0"></a>
# [0.7.0](https://github.com/akveo/ng2-admin/compare/v0.6.0...v0.7.0) (2016-09-19)

### Note
Tree package does not support angular 2.0 currently so it was hidden from the menu.

### Features

* Angular 2.0
* Dependencies updated

### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Remove all directives & pipes from components and move them to the ngModule declarations
* Enjoy!


<a name="0.6.0"></a>
# [0.6.0](https://github.com/akveo/ng2-admin/compare/v0.5.0...v0.6.0) (2016-09-19)

### Note
Tree package does not support RC6 currently so it was hidden from the menu.

### Features

* Angular rc.6
* Dependencies updated

### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Remove all directives & pipes from components and move them to the ngModule declarations
* Enjoy!


<a name="0.5.0"></a>
# [0.5.0](https://github.com/akveo/ng2-admin/compare/v0.4.4...v0.5.0) (2016-08-30)

### Note
Not all packages used in ng2-admin support RC5 at the moment, so we suggest waiting until ng2-admin@0.5.1 version for a complete support of RC5.

### Features

* Angular rc.5 (ngModule)
* Webpack 2
* Dependencies updated

### Breaking changes

Things to consider:

* We introduced NgaModule - wrapper for all ng2-admin features. At the moment it includes everything (directives, services, configs, etc). But, the important thing is that we are planning to refactor it and divide into smaller modules, so that if you don't need a whole list of features somewhere in your code - you can simply import a smaller part. [Here are some more details](https://github.com/akveo/ng2-admin/issues/179).
* Each page section now is a module (Feature Module as per angular documents) wrapped in pages.module.
* Routes configuration (again :( ) moved from one complete file to modules (page sections) configurations. Thus we just left menu configuration as it was before (in one file), just renamed it into app.menu.ts.
* We are planning to continue code refactoring and planning to change component names to follow angular recommendations. Thus we strongly recommend to not import Ba* directives directly and use NgaModule which will encapsulate the changes we are going to make. [Here are some more details](https://github.com/akveo/ng2-admin/issues/179).


### How to update

* Read Angular RC4 -> RC5 [migration guide](https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html)
* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Wrap all your pages into modules, register them in the PagesModule
* Create separate routing files per module
* Remove all direct imports of Ba* components, directives, pipes, etc, instead change your modules the way to import NgaModule
* Enjoy!

<a name="0.4.4"></a>
# [0.4.4](https://github.com/akveo/ng2-admin/compare/v0.4.3...v0.4.4) (2016-08-29)

### Features

* Missed new component [ng2-smart-table](https://akveo.github.io/ng2-smart-table/) - [demo](http://akveo.com/ng2-admin/#/pages/tables/smarttables)

### How to update

* Pull sources from git
* run `npm install`

<a name="0.4.3"></a>
# [0.4.3](https://github.com/akveo/ng2-admin/compare/v0.4.2...v0.4.3) (2016-08-23)

### Bug Fixes

* Fix leaflet maps styles
* Fix license
* Remove tracing of typings (thanks to @GRoguelon)
* Update baContentTop to work with routerLink (thanks to @Kaizeras)
* Fix Chartist to handle data update dynamically (thanks to @bnayalivne)

### Features

* Finally get rid of bower (thanks to @GRoguelon)
* New component [ng2-smart-table](https://akveo.github.io/ng2-smart-table/) - [demo](http://akveo.com/ng2-admin/#/pages/tables/smarttables)


### How to update

* Pull sources from git
* run `npm install`

<a name="0.4.2"></a>
# [0.4.2](https://github.com/akveo/ng2-admin/compare/v0.4.0...v0.4.2) (2016-07-28)

### Bug Fixes

* Fix menu and router configuration
* Fix broken dependencies

### Features

* Dependencies updated
* Use @types instead of typings

### BREAKING CHANGES

* Typings were removed, now we use @types instead, more details [here](https://github.com/AngularClass/angular2-webpack-starter#types)

### How to update

* Remove node_modules folder
* Remove typings folder and move all custom typings to package.json
* run `npm install`


<a name="0.4.0"></a>
# 0.4.0 (2016-07-12)

### Bug Fixes

* Make source files generated correctly (thanks to @AlbertXingZhang)
* Fix docker configuration (thanks to @gavinzhou)

### Features

* Angular updated to rc.4
* Dependencies updated accordingly
* Angular Component Router instead or Router Deprecated (thanks to @RonnyRoos)
* New Angular Forms
* Sidebar rewritten, menu merged with routes configuration
* New CKEditor component
* New Image Uploader component
* New Tree view component
* New Rating component
* New Checkbox and multi-checkbox component

### BREAKING CHANGES

* Router is updated to Angular Router Component. Old beta router is removed.
That means that all the routes are moved to the `src/app/app.routes.ts` file. `src/app/app.menu.ts` is also merged into the routes configuration.
More details on how to configure a new route you can find [here](https://akveo.github.io/ng2-admin/articles/015-sidebar/).

* Forms are updated as well. Thus you need to reconfigure all your forms to use new Angular Forms. Checkout the `src/app/pages/login/login.component.ts`component for more details and example.

### How to update

* run `npm install`


<a name="0.3.0"></a>
# 0.3.0 (2016-06-29)

### Bug Fixes

* Sidebar menu angle fixed
* Sidebar menu selected item fixed

### Features

* Angular updated to rc.3
* Dependencies updated accordingly

### How to update

* Remove `node_modules` and `typings` folders 
* run `npm install`

<a name="0.2.1"></a>
# 0.2.1 (2016-06-21)


### Bug Fixes

* Multiple bugfixes

### Features

* Angular updated to rc.2
* Dependencies updated accordingly
* Login page component [Demo](http://akveo.com/ng2-admin/#/login)
* Sign up page component [Demo](http://akveo.com/ng2-admin/#/register)

### BREAKING CHANGES
* `$` renamed to `jQuery` because of name resolution conflicts

### How to update

* Remove `node_modules` and `typings` folders 
* run `npm install`
