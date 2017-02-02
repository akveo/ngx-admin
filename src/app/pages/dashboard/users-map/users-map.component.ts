import { Component, OnInit } from '@angular/core';

import { UsersMapService } from './users-map.service';
import 'style-loader!./users-map.component.scss';

@Component({
  selector: 'users-map',
  templateUrl: './users-map.component.html'
})
export class UsersMapComponent implements OnInit {

  mapData: any;

  constructor(private _usersMapService: UsersMapService) { }

  ngOnInit(): void {
    this.mapData = this._usersMapService.getData();
  }

}
