import {Component, ViewEncapsulation, Input} from 'angular2/core';

@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  template: require('./baCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}
