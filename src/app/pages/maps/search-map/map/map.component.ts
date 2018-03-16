import { Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Location } from '../entity/Location';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  @Input()
  public set searchedLocation(searchedLocation: Location) {
    this.latitude = searchedLocation.latitude;
    this.longitude = searchedLocation.longitude;
    this.zoom = 12;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // set up current location
    if (isPlatformBrowser(this.platformId) && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedLocation = new Location(
          position.coords.latitude, position.coords.longitude,
        );
      });
    }
  }
}
