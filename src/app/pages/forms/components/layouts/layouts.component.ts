import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'layouts',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./layouts.scss')],
  template: require('./layouts.html'),
})
export class Layouts {

  constructor() {
  }

  ngOnInit() {
  }
}
