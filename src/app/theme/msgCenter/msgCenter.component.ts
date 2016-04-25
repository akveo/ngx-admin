import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'msg-center',
    styles: [ require('./msgCenter.scss') ],
    template: require('./msgCenter.html')
})
export class MsgCenter {}