import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
import {FlatButtons} from './components/flatButtons';
import {RaisedButtons} from './components/raisedButtons';
import {SizedButtons} from './components/sizedButtons';
import {DisabledButtons} from './components/disabledButtons';
import {IconButtons} from './components/iconButtons';
import {LargeButtons} from './components/largeButtons';
import {DropdownButtons} from './components/dropdownButtons';
import {GroupButtons} from './components/groupButtons';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    FlatButtons,
    RaisedButtons,
    SizedButtons,
    DisabledButtons,
    IconButtons,
    LargeButtons,
    DropdownButtons,
    GroupButtons
  ],
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {

  constructor() {
  }
}
