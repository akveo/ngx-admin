import {Component, ViewEncapsulation} from '@angular/core';


import {BaAppPicturePipe} from '../../../../theme/pipes';
import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'item-details',
  pipes: [BaAppPicturePipe],
  directives: [BaCard],
  providers: [],
  styles: [],
  template: require('./details.html'),
})
export class Details {

  constructor() {
  }
}
