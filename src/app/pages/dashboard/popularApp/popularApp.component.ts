import {Component, ViewEncapsulation} from '@angular/core';

import {AppPicturePipe} from '../../../theme/pipes';

@Component({
  selector: 'popular-app',
  encapsulation: ViewEncapsulation.None,
  pipes: [AppPicturePipe],
  styles: [require('./popularApp.scss')],
  template: require('./popularApp.html')
})
export class PopularApp {

  ngOnInit() {
  }
}
