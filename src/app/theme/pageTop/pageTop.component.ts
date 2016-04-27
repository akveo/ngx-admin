import {Component, ViewEncapsulation} from 'angular2/core';

import {MsgCenter} from '../msgCenter';
import {ProfilePicturePipe} from '../pipes/image/profile-picture.pipe';

@Component({
    selector: 'page-top',
    styles: [ require('./pageTop.scss') ],
    template: require('./pageTop.html'),
    directives: [MsgCenter],
    pipes: [ProfilePicturePipe]
})
export class PageTop {}
