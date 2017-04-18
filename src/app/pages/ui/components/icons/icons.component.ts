import {Component} from '@angular/core';

import {IconsService} from './icons.service';

@Component({
  selector: 'icons',
  templateUrl: './icons.html',
  styleUrls: ['./icons.scss']
})
export class Icons {

  icons:any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
