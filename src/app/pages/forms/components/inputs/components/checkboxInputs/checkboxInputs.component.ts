import {Component} from '@angular/core';
import {BaCheckbox} from '../../../../../../theme/components';

@Component({
  selector: 'checkbox-inputs',
  template: require('./checkboxInputs.html'),
  directives: [BaCheckbox]
})
export class CheckboxInputs {

  constructor() {
  }
  
}
