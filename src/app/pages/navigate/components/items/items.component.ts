import {Component, ViewEncapsulation} from '@angular/core';


import {BaAppPicturePipe} from '../../../../theme/pipes';
import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'items',
  pipes: [BaAppPicturePipe],
  directives: [BaCard],
  providers: [],
  styles: [],
  template: require('./items.html'),
})
export class Items {

  constructor() {
  }
}
