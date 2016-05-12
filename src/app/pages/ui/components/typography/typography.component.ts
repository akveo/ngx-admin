import {Component, ViewEncapsulation} from '@angular/core';


import {AppPicturePipe} from '../../../../theme/pipes';
import {BaCard} from '../../../../theme/components';

@Component({
  selector: 'typography',
  pipes: [AppPicturePipe],
  directives: [BaCard],
  providers: [],
  styles: [],
  template: require('./typography.html'),
})
export class Typography {

  constructor() {
  }
}
