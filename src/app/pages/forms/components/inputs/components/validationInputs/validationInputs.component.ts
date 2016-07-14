import {Component} from '@angular/core';
import {BaMultiCheckbox} from '../../../../../../theme/components';

@Component({
  selector: 'validation-inputs',
  directives: [BaMultiCheckbox],
  template: require('./validationInputs.html'),
})
export class ValidationInputs {
  public checkboxModel = [{
    name: 'Checkbox with success',
    state: false,
    class: 'has-success checkbox'
  }, {
    name: 'Checkbox with warning',
    state: false,
    class: 'has-warning checkbox',
  }, {
    name: 'Checkbox with error',
    state: false,
    class: 'has-error checkbox'
  }];

  public checkboxPropertiesMapping = {
    model: 'state',
    value: 'name',
    label: 'name',
    baCheckboxClass: 'class'
  };
  
  constructor() {
  }
}
