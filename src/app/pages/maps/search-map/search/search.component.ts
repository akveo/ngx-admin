import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { PositionModel } from '../entity/position.model';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @Output()
  positionChanged: EventEmitter<PositionModel> = new EventEmitter<PositionModel>();

  @ViewChild('search', { static: true })
  searchElementRef: ElementRef;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement, { types: ['address'] },
    );

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        // get the place result
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

        // verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.positionChanged.emit(new PositionModel(
          place.geometry.location.lat(),
          place.geometry.location.lng(),
        ));
      });
    });
  }
}
