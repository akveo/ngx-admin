<a name="0.9.0"></a>
# 0.9.0 (2017-01-30)

### Features

* Angular 2.4.4
* Dependencies updated
* [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) :tada:
* DLL bundles

### Bug Fixes

### How to use AOT

* run `npm run build:aot`
* run `npm run server:prod`

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
# 0.8.0 (2016-11-25)

### Features

* Angular 2.2.3
* Dependencies updated

### Bug Fixes


### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Enjoy!


<a name="0.7.0"></a>
# 0.7.0 (2016-09-19)

### Note
Tree package does not support angular 2.0 currently so it was hidden from the menu.

### Features

* Angular 2.0
* Dependencies updated

### Bug Fixes


### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Remove all directives & pipes from components and move them to the ngModule declarations
* Enjoy!


<a name="0.6.0"></a>
# 0.6.0 (2016-09-19)

### Note
Tree package does not support RC6 currently so it was hidden from the menu.

### Features

* Angular rc.6
* Dependencies updated

### Bug Fixes


### How to update

* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Remove all directives & pipes from components and move them to the ngModule declarations
* Enjoy!


<a name="0.5.0"></a>
# 0.5.0 (2016-08-30)

### Note
Not all packages used in ng2-admin support RC5 at the moment, so we suggest waiting until ng2-admin@0.5.1 version for a complete support of RC5.

### Features

* Angular rc.5 (ngModule)
* Webpack 2
* Dependencies updated

### Bug Fixes

### Breaking changes

Things to consider:

* We introduced NgaModule - wrapper for all ng2-admin features. At the moment it includes everything (directives, services, configs, etc). But, the important thing is that we are planning to refactor it and divide into smaller modules, so that if you don't need a whole list of features somewhere in your code - you can simply import a smaller part. [Here are some more details](https://github.com/akveo/ng2-admin/issues/179).
* Each page section now is a module (Feature Module as per angular documents) wrapped in pages.module.
* Routes configuration (again :( ) moved from one complete file to modules (page sections) configurations. Thus we just left menu configuration as it was before (in one file), just renamed it into app.menu.ts.
* We are planning to continue code refactoring and planning to change component names to follow angular recommendations. Thus we strongly recommend to not import Ba* directives directly and use NgaModule which will encapsulate the changes we are going to make. [Here are some more details](https://github.com/akveo/ng2-admin/issues/179).


### How to update

* Read Angluar RC4 -> RC5 [migration guide](https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html)
* Pull sources from git, merge accordingly
* remove `node_modules`
* run `npm install`
* Wrap all your pages into modules, register them in the PagesModule
* Create separate routing files per module
* Remove all direct imports of Ba* components, directives, pipes, etc, instead change your modules the way to import NgaModule
* Enjoy!

<a name="0.4.4"></a>
# 0.4.4 (2016-08-29)

### Features

* Missed new component [ng2-smart-table](https://akveo.github.io/ng2-smart-table/) - [demo](http://akveo.com/ng2-admin/#/pages/tables/smarttables)

### How to update

* Pull sources from git
* run `npm install`

<a name="0.4.3"></a>
# 0.4.3 (2016-08-23)

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
# 0.4.2 (2016-07-28)

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
