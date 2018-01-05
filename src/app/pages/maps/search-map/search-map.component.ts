import { Component, OnInit } from '@angular/core';
import { Location } from "./entity/Location";

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent implements OnInit {

  searchedLocation: Location = new Location();

  ngOnInit() {
    // set up current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedLocation = new Location(
          position.coords.latitude, position.coords.longitude
        );
      });
    }
  }

  updateLocation($event: Location) {
    this.searchedLocation = new Location($event.latitude, $event.longitude);
  }
}
