import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {StandardInputs} from './components/standardInputs';
import {ValidationInputs} from './components/validationInputs';
import {GroupInputs} from './components/groupInputs';
import {CheckboxInputs} from './components/checkboxInputs';
import {Rating} from './components/ratinginputs';
import {DateTimeInputs} from "./components/datetimeInputs/datetimeInputs.component";


@Component({
  selector: 'inputs',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, StandardInputs, ValidationInputs, GroupInputs, CheckboxInputs, Rating, DateTimeInputs],
  template: require('./inputs.html'),
})
export class Inputs {

  constructor() {
  }
}
