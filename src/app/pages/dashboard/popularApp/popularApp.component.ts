/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'popular-app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./popularApp.scss')],
  template: require('./popularApp.html')
})
export class PopularApp {

  constructor() {
  }

  ngOnInit() {
    console.log('DASHBOARD');
  }

}
