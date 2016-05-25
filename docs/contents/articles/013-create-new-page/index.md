---
title: Create New Page
author: vl
sort: 300
group: Customization
template: article.jade
---

ng2-admin uses [Angular Router](https://angular.io/docs/ts/latest/guide/router-deprecated.html) for navigation.
Currently this version of the router is deprecated and we are going to move on to a new version once it's stable.

We strongly recommend to follow pages structure in your application. 
If it doesn't fit your needs please create a GitHub issue and tell us why. We would be glad to discuss. 


Basically any page is just a usual Angular 2 Component with some routes defined for it.

## Page creation example

1) Let's assume we want to create a blank page with title 'My New Page'
<br><br>

2) Let's Create a new directory to contain our new page inside of `src/app/pages`. Let's call this directory `new`.
<br><br>

3) Then let's create blank angular component to contain our page called 'new.component.module.js' inside of `src/app/pages/new`:

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
This will create a simple Angular 2 component, for more detail please check out [official Angular 2 documentation](https://angular.io/docs/ts/latest/guide/displaying-data.html).
<br><br>

4) Last thing we need to do is to define a Router configuration in a parent component, in our case in Pages component `src/app/pages/pages.component.ts`:
```javascript
@RouteConfig([
  // ... some routes here
  {
    name: 'New',
    component: New,
    path: '/new',
  }
])
export class Pages {
}
```
<br><br>

And that's it! now your page should be available by the following url [http://localhost:3000/#/pages/new](http://localhost:3000/#/pages/new).
If you want to add a link to your page into Sidebar, please look at the [following article](/ng2-admin/articles/015-sidebar/).

