import {Component} from '@angular/core';

import {UsersMapService} from './usersMap.service';
import 'style-loader!./usersMap.scss';

@Component({
  selector: 'users-map',
  templateUrl: './usersMap.html'
})
export class UsersMap {

  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {
    this.mapData = this._usersMapService.getData();
  }
}
