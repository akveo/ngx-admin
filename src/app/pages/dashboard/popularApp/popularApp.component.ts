import {Component, ViewEncapsulation} from 'angular2/core';

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
