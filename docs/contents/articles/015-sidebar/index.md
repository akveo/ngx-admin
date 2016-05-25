---
title: Sidebar
author: vl
sort: 900
group: Components
template: article.jade
---

Sidebar is used to provide convenient way of navigation in the application. 
Application supports only one sidebar per angular application. 
That means sidebar is basically a singletone object.
Currently sidebar supports level 1 and 2 sub menus.
 
Sidebar can be added to the page using `BaSidebar` component:
```html
<ba-sidebar></ba-sidebar>
```

At the moment sidebar menu items configuration and Angular 2 Router should be configured independently. We probably will come up with a better solution once new Angular Router is released and stable.


## Menu Configuration

All menu items are located inside `src/app/app.menu.ts` file. The file contains a list of Menu Item objects with the following fields:

```javascript
  {
    title: 'Dashboard', // menu item title
    component: 'Dashboard', // component where the menu should lead, has a priority over url property
    url: 'http://google.com' // manual url address (used only when component is not specified)
    icon: 'ion-android-home', // icon class
    target: '_blank', // link target attribute (used only when url is specified)
    selected: false,  // is item selected
    expanded: false, // is item expanded (used only when subItems list specified)
    order: 0 // order in a list
  }
```
You also can define a list of sub-menu items like this:
```javascript
  {
    title: 'Charts',
    component: 'Charts',
    icon: 'ion-stats-bars',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [  // list of sub-menu items
      {
        title: 'Chartist.Js', // sub-item title
        component: 'ChartistJs'  // sum-item component 
      },
    ]
  }
```

## Routes configuration

Routes configuration is specified in the Page Components according to Angular 2 Router specification. More information you can find [here](https://angular.io/docs/ts/latest/guide/router-deprecated.html).