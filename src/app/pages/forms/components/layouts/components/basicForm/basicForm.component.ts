import {Component} from '@angular/core';
import {BaCheckbox} from '../../../../../../theme/components';

@Component({
  selector: 'basic-form',
  directives: [BaCheckbox],
  template: require('./basicForm.html'),
})
export class BasicForm {

  constructor() {
  }
}
