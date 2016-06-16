import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  constructor() {
  }

  ngOnInit() {
  }
}
