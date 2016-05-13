import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'inputs',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./inputs.scss')],
  template: require('./inputs.html'),
})
export class Inputs {

  constructor() {
  }
}
