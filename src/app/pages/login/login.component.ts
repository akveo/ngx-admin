import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  constructor() {
  }

  ngOnInit() {
  }
}
