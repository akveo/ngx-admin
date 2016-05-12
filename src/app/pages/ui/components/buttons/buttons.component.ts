import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
import {FlatButtons} from './components/flatButtons';
import {RaisedButtons} from './components/raisedButtons';
import {SizedButtons} from './components/sizedButtons';
import {DisabledButtons} from './components/disabledButtons';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, FlatButtons, RaisedButtons, SizedButtons, DisabledButtons],
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {

  constructor() {
  }
}
