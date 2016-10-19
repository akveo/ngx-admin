import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'grid',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./grid.scss')],
  template: require('./grid.html'),
})
export class Grid {

  constructor() {
  }
}
