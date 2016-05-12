import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'grid',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./grid.scss')],
  template: require('./grid.html'),
})
export class Grid {

  constructor() {
  }
}
