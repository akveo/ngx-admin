import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./basicTables.scss')],
  template: require('./basicTables.html')
})
export class BasicTables {

  constructor() {
  }
}
