import {Component} from '@angular/core';
import {BaCheckbox} from '../../../../../../theme/components/baCheckbox';

@Component({
  selector: 'validation-inputs',
  directives: [BaCheckbox],
  template: require('./validationInputs.html'),
})
export class ValidationInputs {

  constructor() {
  }
}
