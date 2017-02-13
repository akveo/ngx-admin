---
title: Project Structure
author: vl
sort: 800
group: Customization
template: article.jade
---

The project structure is originally based on [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter#file-structure). We made some changes we thought would be better in our particular case.

The directory structure of this template is as follows:

```
ng2-admin/
   ├──config/                    * webpack build configuration
   │   ├──head-config.common.js  * configuration for head elements in index.html
   │   │
   │   ├──helpers.js             * helper functions for our configuration files
   │   │
   │   ├──webpack.dev.js         * development webpack config
   │   │
   │   ├──webpack.prod.js        * production webpack config
   │   │
   │   ├──webpack.test.js        * testing webpack config
   │   │
   │   ├──electron/              * electron webpack config
   │   │
   │   └──html-elements-plugin/  * html elements plugin
   │
   ├──src/                       * source files that will be compiled to javascript
   │   ├──custom-typings.d.ts    * custom typings for third-party modules
   │   │
   │   ├──desktop.ts             * electron window initialization
   │   │
   │   ├──index.html             * application layout
   │   │
   │   ├──main.browser.ts        * entry file for our browser environment
   │   │
   │   ├──package.json           * electrons package.json
   │   │
   │   ├──polyfills.browser.ts   * polyfills file
   │   │
   │   ├──vendor.browser.ts      * vendors file
   │   │
   │   ├──app/                   * application code - our working directory
   │   │   │
   │   │   ├──app.component.ts   * main application component
   │   │   │
   │   │   │
   │   │   ├──app.menu.ts        * menu pages routes
   │   │   │
   │   │   ├──app.module.ts      * main application module
   │   │   │
   │   │   ├──app.routes.ts      * application routes
   │   │   │  
   │   │   ├──global.state.ts    * global application state for data exchange between components
   │   │   │
   │   │   ├──environment.ts     * environment provider
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
   └──package.json               * what npm uses to manage it's dependencies
```
In our template we tried to separate the theme layer and presentation layer. We believe most of other templates 
have them combined. That's why when you start developing using them, it gets very hard for you to remove things you 
don't need.
