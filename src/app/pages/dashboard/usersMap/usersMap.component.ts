import {Component, ViewEncapsulation} from 'angular2/core';

import './usersMap.loader.ts';
import {UsersMapService} from './usersMap.service';

@Component({
  selector: 'users-map',
  encapsulation: ViewEncapsulation.None,
  providers: [UsersMapService],
  styles: [require('./usersMap.scss')],
  template: require('./usersMap.html')
})
export class UsersMap {

  constructor(private _usersMapService:UsersMapService) {
  }

  ngAfterViewInit() {
    this._loadUsersMap();
  }

  // TODO: load proper AmCharts theme
  private _loadUsersMap() {
    AmCharts.makeChart('amChartMap', this._usersMapService.getData());
  }
}
