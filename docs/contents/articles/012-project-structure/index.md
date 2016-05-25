---
title: Project Structure
author: vl
sort: 800
group: Customization
template: article.jade
---

Project structure is originally based on [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter#file-structure). We made some changes we thought would be better in our particular case.

The directory structure of this template is as follows:

```
ng2-admin/
   ├──config/                    * build configuration
   │   ├──helpers.js             * helper functions for our configuration files
   │   ├──webpack.dev.js         * development webpack config
   │   ├──webpack.prod.js        * production webpack config
   │   └──webpack.test.js        * testing webpack config
   │
   ├──src/                       * source files that will be compiled to javascript
   │   ├──main.browser.ts        * entry file for our browser environment
   │   │
   │   ├──index.html             * application layout
   │   │
   │   ├──polyfills.ts           * polyfills file
   │   │
   │   ├──vendor.ts              * vendors file
   │   │
   │   ├──custom-typings.d.ts    * custom typings for third-party modules
   │   │
   │   ├──platform/              * platform dependent imports
   │   │
   │   ├──app/                   * application code - our working directory
   │   │   │
   │   │   ├──app.component.ts   * main application component
   │   │   │
   │   │   ├──app.loader.ts      * requires initial css styles (most important for application loading stage)
   │   │   │
   │   │   ├──app.menu.ts        * sidebar menu configuration
   │   │   │
   │   │   ├──app.state.ts       * global application state for data exchange between components
   │   │   │
   │   │   ├──app.scss           * application styles 
   │   │   │
   │   │   ├──pages/             * application pages components, place where you can create pages and fill them with components
   │   │   │
   │   │   └──theme/             * template global components/directives/pipes and styles
   │   │
   │   └──assets/                * static assets are served here
   │
   │
   ├──tslint.json                * typescript lint config
   ├──typedoc.json               * typescript documentation generator
   ├──tsconfig.json              * config that webpack uses for typescript
   ├──typings.json               * our typings manager
   ├──package.json               * what npm uses to manage it's dependencies
   ├──bower.json                 * DEPRECATED - moving to npm as primary package manager for all dependenties
   └──.bowerrc                   * DEPRECARD - temporary bower configuration
```
In our template we tried to separate theme layer and presentation layer. We believe most of other templates have them combined. That's why when you start developing using them, it gets very hard for you to remove things you don't need.
