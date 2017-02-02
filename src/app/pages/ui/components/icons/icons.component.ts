import { Component, OnInit } from '@angular/core';

import { IconsService } from './icons.service';

import 'style-loader!./icons.component.scss';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
})
export class IconsComponent implements OnInit {

  icons: any;

  constructor(private _iconsService: IconsService) { }

  ngOnInit(): void {
    this.icons = this._iconsService.getAll();
  }

}
