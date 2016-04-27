import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'sidebar',
    styles: [ require('./sidebar.scss') ],
    template: require('./sidebar.html'),
    directives: [],
    pipes: []
})
export class Sidebar {}
