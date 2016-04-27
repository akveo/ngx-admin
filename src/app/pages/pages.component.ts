import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Dashboard} from './dashboard';
import {PageTop, Sidebar} from '../theme';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'pages',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [PageTop, Sidebar],
    template:  `<sidebar></sidebar><page-top></page-top><router-outlet></router-outlet>`
})
@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, useAsDefault: true },
])
export class Pages {
    constructor() {}

    ngOnInit() {
        console.log('Pages');
    }

}
