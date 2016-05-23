---
title: Create New Page
author: vl
sort: 300
group: Customization
template: article.jade
---

Blur admin uses [Angular UI router](https://github.com/angular-ui/ui-router) for navigation. 
That means to create new page you need to basically configure `ui-router` state.

We strongly recommend to follow pages structure in your application. 
If it doesn't fit your needs please create a GitHub issue and tell us why. We would be glad to discuss. 

Also we recommend to put pages to separate modules. 
This will allow you to easily switch off some pages in the future if needed.

## Page creation example

0) Let's assume we want to create a blank page with title 'My New Page'

1) Let's Create a new directory to contain our new page inside of `src/app/pages`. Let's call this directory `myNewPage`.

2) Then let's create blank angular module to contain our page called 'myNewPage.module.js' inside of `src/app/pages/myNewPage`:

```javascript
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig() {
   
  }

})();
```

3) Then let's create empty html file called `my-new-page.html` inside of `src/app/pages/myNewPage`.

4) Lastly let's create ui router state for this page. To do this we need to modify module.js file we created on step 2:
```javascript
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.myNewPage', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('myNewPage', {
          url: '/myNewPage',
          templateUrl: 'app/pages/myNewPage/my-new-page.html',
          title: 'My New Page',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();
```

That's it! Your can now open your new page either from sidebar or through hash URL.

