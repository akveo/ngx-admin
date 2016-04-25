import {Component, ViewEncapsulation} from 'angular2/core';

import {MsgCenter} from '../msgCenter';

@Component({
    selector: 'page-top',
    styles: [ require('./pageTop.scss') ],
    template: require('./pageTop.html'),
    directives: [MsgCenter]
})
export class PageTop {}
