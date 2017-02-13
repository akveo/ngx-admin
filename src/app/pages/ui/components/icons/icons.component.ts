import {Component} from '@angular/core';

import {IconsService} from './icons.service';

import 'style-loader!./icons.scss';

@Component({
  selector: 'icons',
  templateUrl: './icons.html',
})
export class Icons {

  icons:any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
