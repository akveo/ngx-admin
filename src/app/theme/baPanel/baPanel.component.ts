import {Component, ViewEncapsulation, Input} from 'angular2/core';

@Component({
  selector: 'ba-panel',
  styles: [require('./baPanel.scss')],
  template: require('./baPanel.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPanel {
  @Input() title:String;
  @Input() baPanelClass:String;
}
