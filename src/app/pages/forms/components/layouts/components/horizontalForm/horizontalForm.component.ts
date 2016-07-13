import {Component} from '@angular/core';
import {BaCheckbox} from '../../../../../../theme/components';

@Component({
  selector: 'horizontal-form',
  directives: [BaCheckbox],
  template: require('./horizontalForm.html'),
})
export class HorizontalForm {

  constructor() {
  }
}
