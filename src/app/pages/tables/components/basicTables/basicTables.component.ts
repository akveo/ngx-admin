import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./basicTables.scss')],
  template: require('./basicTables.html'),
})
export class BasicTables {

  constructor() {
  }
}
