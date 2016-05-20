import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {StandardInputs} from './components/standardInputs';
import {ValidationInputs} from './components/validationInputs';
import {GroupInputs} from './components/groupInputs';
import {CheckboxInputs} from './components/checkboxInputs';

@Component({
  selector: 'inputs',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, StandardInputs, ValidationInputs, GroupInputs, CheckboxInputs],
  template: require('./inputs.html'),
})
export class Inputs {

  constructor() {
  }
}
