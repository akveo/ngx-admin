import { Component } from '@angular/core';
import { Location } from './entity/Location';

@Component({
  selector: 'ngx-search-map',
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {

  searchedLocation: Location = new Location();

  updateLocation(event: Location) {
    this.searchedLocation = new Location(event.latitude, event.longitude);
  }
}
