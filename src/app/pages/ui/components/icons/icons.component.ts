import {Component, ViewEncapsulation} from '@angular/core';

import {IconsService} from './icons.service';

@Component({
  selector: 'icons',
  encapsulation: ViewEncapsulation.None,
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
