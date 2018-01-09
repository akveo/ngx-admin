import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Location } from '../entity/Location';
import { LocationService } from '../location-service.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  @Output() positionChanged = new EventEmitter<Location>();

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private locationService: LocationService) {
  }

  onSearch(address: string): void {
    const searchRes: Observable<any> = this.locationService.searchByAddress(address);
    console.log('searchRes: ' + searchRes);
    searchRes.subscribe(response => {
        this.positionChanged.emit(
          new Location(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng));
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }
}
