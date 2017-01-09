import {Component, ViewEncapsulation} from '@angular/core';

import {IconsService} from './icons.service';

@Component({
  selector: 'icons',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./icons.scss'],
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
