import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./buttons.scss')],
  template: require('./buttons.html'),
})
export class Buttons {

  constructor() {
  }
}
