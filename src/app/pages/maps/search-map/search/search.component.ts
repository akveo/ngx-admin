import {
  Component, ElementRef, EventEmitter, NgZone, OnInit, Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrentLocationProvider } from '../calc.service';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { Location } from "../entity/Location";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchControl: FormControl;

  @Output()
  newLocationEvent = new EventEmitter<Location>();

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,) {
  }

  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.newLocationEvent.emit(new Location(place.geometry.location.lat(), place.geometry.location.lng()));
        });
      });
    });
  }
}
