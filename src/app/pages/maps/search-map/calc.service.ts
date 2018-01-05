import { EventEmitter, Injectable, Output } from '@angular/core';
import { Location } from "./entity/Location";

@Injectable()
export class CurrentLocationProvider {

  @Output('newLocationEvent')
  newLocationEvent = new EventEmitter<Location>();

  getCurrentPosition(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.newLocationEvent.emit(
          new Location(position.coords.latitude, position.coords.longitude)
        );
      });
    }
  }
}
