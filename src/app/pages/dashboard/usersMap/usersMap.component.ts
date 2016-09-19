import {Component, ViewEncapsulation} from '@angular/core';

import {UsersMapService} from './usersMap.service';

@Component({
  selector: 'users-map',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./usersMap.scss')],
  template: require('./usersMap.html')
})
export class UsersMap {

  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {
    this.mapData = this._usersMapService.getData();
  }
}
