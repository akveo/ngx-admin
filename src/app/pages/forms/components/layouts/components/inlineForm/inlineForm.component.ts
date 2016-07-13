import {Component} from '@angular/core';
import {BaCheckbox} from '../../../../../../theme/components';

@Component({
  selector: 'inline-form',
  directives: [BaCheckbox],
  template: require('./inlineForm.html'),
})
export class InlineForm {
  
  constructor() {
  }
}
