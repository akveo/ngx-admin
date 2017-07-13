import {Component} from '@angular/core';

import {UsersMapService} from './usersMap.service';

@Component({
  selector: 'users-map',
  templateUrl: './usersMap.html',
  styleUrls: ['./usersMap.scss']
})
export class UsersMap {

  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {
    this.mapData = this._usersMapService.getData();
  }
}
