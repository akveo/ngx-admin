import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';
import {BaKameleonPicturePipe} from '../../../../theme/pipes';
import {IconsService} from './icons.service';

@Component({
  selector: 'icons',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  pipes: [BaKameleonPicturePipe],
  providers: [IconsService],
  styles: [require('./icons.scss')],
  template: require('./icons.html'),
})
export class Icons {

  icons:any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
