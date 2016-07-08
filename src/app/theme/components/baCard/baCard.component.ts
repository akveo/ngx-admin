import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';
import {BaCardBlur} from './baCardBlur.directive';

@Component({
  selector: 'ba-card',
  styles: [require('./baCard.scss')],
  directives: [BaCardBlur],
  template: require('./baCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}
