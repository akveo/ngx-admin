import {Component, ViewEncapsulation} from '@angular/core';


import {BaAppPicturePipe} from '../../../../theme/pipes';
import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'typography',
  pipes: [BaAppPicturePipe],
  directives: [BaCard],
  providers: [],
  styles: [],
  template: require('./typography.html'),
})
export class Typography {

  constructor() {
  }
}
