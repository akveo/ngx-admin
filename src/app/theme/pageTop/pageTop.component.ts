import {Component, ViewEncapsulation} from 'angular2/core';

import {MsgCenter} from '../msgCenter';
import {ProfilePicturePipe} from '../pipes/image/profile-picture.pipe';
import {ScrollPosition} from '../directives/scrollPosition.directive';

@Component({
    selector: 'page-top',
    styles: [ require('./pageTop.scss') ],
    template: require('./pageTop.html'),
    directives: [MsgCenter, ScrollPosition],
    pipes: [ProfilePicturePipe]
})
export class PageTop {
    isScrolled: Boolean = false;

    scrolledChanged(isScrolled) {
        this.isScrolled = isScrolled;
    }
}
