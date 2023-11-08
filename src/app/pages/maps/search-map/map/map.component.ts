import { Component, Input, OnInit } from '@angular/core';
import { PositionModel } from '../entity/position.model';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  position: PositionModel = null;
  zoom: number = 1;

  @Input()
  public set searchedPosition(position: PositionModel) {
    if (position) {
      this.position = position;
      this.zoom = 12;
    }
  }

  ngOnInit() {
    // set up current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedPosition = new PositionModel(
          position.coords.latitude,
          position.coords.longitude,
        );
      });
    }
  }
}
