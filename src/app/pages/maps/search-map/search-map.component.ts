import { Component } from '@angular/core';
import { Location } from './entity/Location';

@Component({
  selector: 'ngx-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss'],
})
export class SearchMapComponent {

  searchedLocation: Location = new Location();

  updateLocation(newSearchedLocation: Location) {
    this.searchedLocation = newSearchedLocation;
  }
}
