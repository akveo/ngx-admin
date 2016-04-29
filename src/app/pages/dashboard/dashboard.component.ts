/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'dashboard',
  pipes: [],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: 'DASHBOARD'
})
export class Dashboard {

  constructor() {
  }

  ngOnInit() {
    console.log('DASHBOARD');
  }

}
