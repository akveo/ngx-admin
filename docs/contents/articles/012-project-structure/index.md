---
title: Project Structure
author: vl
sort: 800
group: Customization
template: article.jade
---

The directory structure of this template is as follows:

```
ng2-admin/
   ├──e2e/
   │   ├──tsconfig.e2e.json             * typescript config that protractor use for e2e tests
   │  
   ├──src/                              * source files that will be compiled to javascript
   │   ├──typings.d.ts                  * custom typings for third-party modules
   │   │
   │   ├──index.html                    * application layout
   │   │
   │   ├──main.ts                       * entry file for our browser environment
   │   │
   │   ├──polyfills.ts                  * polyfills file
   │   │
   │   ├──app/                          * application code - our working directory
   │   │   ├──pages/
   │   │   │   ├──pages.menu.ts         * menu pages routes
   │   │   │
   │   │   ├──app.component.ts          * main application component
   │   │   │
   │   │   ├──app.module.ts             * main application module
   │   │   │
   │   │   ├──app.routing.ts            * application routes
   │   │   │ 
   │   │   ├──app.translation.module.ts * main translation module
   │   │   │  
   │   │   ├──global.state.ts           * global application state for data exchange between components
   │   │   │
   │   │   ├──environment.ts            * environment provider
   │   │   │
   │   │   ├──app.component.scss        * application styles 
   │   │   │
   │   │   ├──pages/                    * application pages components, place where you can create pages and fill them with components
   │   │   │
   │   │   └──theme/                    * template global components/directives/pipes and styles
   │   │
   │   └──assets/                       * static assets are served here
   │
   │
   ├──.angular-cli.json                 * Angular CLI config
   │
   ├──Dockerfile                        * Docker config
   │
   ├──karma.conf.js                     * config that karma use for unit tests
   │
   ├──protractor.conf.js                * config that protractor use for e2e tests
   │
   ├──.angular-cli.json                 * Angular CLI config
   │
   ├──.stylelintrc.json                 * SASS/CSS lint config
   │
   ├──tslint.json                       * typescript lint config
   │
   ├──typedoc.json                      * typescript documentation generator
   │
   ├──tsconfig.json                     * config that webpack uses for typescript
   │
   └──package.json                      * what npm uses to manage it's dependencies
```
In our template we tried to separate the theme layer and presentation layer. We believe most of other templates 
have them combined. That's why when you start developing using them, it gets very hard for you to remove things you 
don't need.
