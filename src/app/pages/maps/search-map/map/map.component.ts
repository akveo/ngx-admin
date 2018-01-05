import { Component, Input, OnInit } from '@angular/core';
import { CurrentLocationProvider } from '../calc.service';
import { Location } from "../entity/Location";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  @Input()
  public set searchedLocation(searchedLocation: Location) {
    alert('set searchedLocation');
    this.latitude = searchedLocation.latitude;
    this.longitude = searchedLocation.longitude;
    this.zoom = 12;
  };

  constructor(public currentLocationProvider: CurrentLocationProvider) {
  }

  ngOnInit(): void {
    this.currentLocationProvider.getCurrentPosition();
  }
}
