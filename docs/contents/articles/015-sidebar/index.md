---
title: Sidebar
author: vl
sort: 900
group: Components
template: article.jade
---

The sidebar provides a convenient way to navigate the application. 
Only one sidebar is supported per angular application. 
This means that the sidebar is basically a singleton object.
 
The Sidebar can be added to the page using the `BaSidebar` component:
```html
<ba-sidebar></ba-sidebar>
```

The sidebar contains a `<ba-menu></ba-menu>` component which defines and renders the application menu based on routes provided. Generally the `ba-menu` component can be used separately from `ba-sidebar`.
All menu items information is defined inside the `data` property of a route.

## Menu Configuration

All menu items are located inside the `src/app/app.routes.ts` file. Each route item can have a `menu` property under `data` defining a menu item:

```javascript
  {
    // first, router configuration
    path: 'dashboard',
    component: Dashboard,
    data: {
      // here additionaly we define how the menu item should look
      menu: {
        title: 'Dashboard', // menu title
        icon: 'ion-android-home', // menu icon
        selected: false, // selected or not
        expanded: false, // expanded or not (if item has children)
        order: 0, // item order in the menu list,
        hidden: true // hide menu item from a list but keep related features (breadcrumbs, page title)
      }
    }
  }
```

You also can define a list of sub-menu items like this:
```javascript
  {
    // parent route
    path: 'charts',
    component: Charts,
    data: {
    
      // parent menu configuration
      menu: {
        title: 'Charts',
        icon: 'ion-stats-bars',
        selected: false,
        expanded: false,
        order: 200,
      }
    },
    
    // children routes
    children: [
      {
        path: 'chartist-js',
        component: ChartistJs,
        data: {
        
          // children menu item configuration
          menu: {
            title: 'Chartist.Js',
          }
        }
      }
    ]
  }
```
# Custom menu items

You also can define a menu item not connected to any existing route in the application:

```javascript
  {
    path: '', // just leave the path empty
    data: {
    
      // and define your menu item
      menu: {
        title: 'External Link', // title
        url: 'http://akveo.com', // custom url
        icon: 'ion-android-exit', // icon
        order: 800, // order
        target: '_blank' // target property of <a> tag (_self, _blank, etc)
      }
    }
  }
```
