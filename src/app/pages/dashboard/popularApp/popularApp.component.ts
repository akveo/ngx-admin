import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'popular-app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./popularApp.scss')],
  template: require('./popularApp.html')
})
export class PopularApp {

  ngOnInit() {
  }
}
