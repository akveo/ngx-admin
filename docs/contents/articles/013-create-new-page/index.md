---
title: Create New Page
author: vl
sort: 300
group: Customization
template: article.jade
---

ng2-admin uses [Angular 2 Component Router](https://angular.io/docs/ts/latest/guide/router.html) for navigation.

We strongly recommend to follow this page structure in your application.
If it does not fit your needs please create a GitHub issue and tell us why. We would be glad to discuss. 


Basically any page is just a common Angular 2 Component with a route defined for it.

## Page creation example

1) Let's assume we want to create a blank page with a title 'My New Page'
<br><br>

2) Let's Create a new directory for our new page inside of `src/app/pages`. Let's call the directory `new`.
<br><br>

3) Then let's create a blank angular 2 component for our page called 'new.component.ts' inside of `src/app/pages/new`:

```javascript
import {Component} from '@angular/core';

@Component({
  selector: 'new',
  pipes: [],
  providers: [],
  styles: [],
  template: `<strong>My page content here</strong>`
})
export class New {

  constructor() {
  }
}
```
This will create a simple Angular 2 component. For more detail please check out [official Angular 2 documentation](https://angular.io/docs/ts/latest/guide/displaying-data.html).
<br><br>

4) The last thing we need to do is to define a Router configuration. Routes for pages are located 
inside of `src/app/pages/pages.routing.ts`.
Typically all pages are children of the `/pages` route and defined under the `children` property of the root `pages` route like this:

```javascript
// imports here
// lets import our page
import {New} from './new/new.component';


//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'new',  // path for our page
        component: New, // component imported above
        data: { // custom menu declaration
          menu: {
            title: 'New Page', // menu title
            icon: 'ion-android-home', // menu icon
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      
       
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
      // rest of the routes
    ]
  }
];

```
<br><br>

And that's it! Now your page is available by the following this url [http://localhost:3000/#/pages/new](http://localhost:3000/#/pages/new).
Plus, your page is automatically registered inside the sidebar menu. If you don't want to have a link 
in the menu - just remove the `menu` declaration under the `data` property.

