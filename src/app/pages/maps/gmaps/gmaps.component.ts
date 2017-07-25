import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <nga-card size="xlarge">
      <nga-card-header>Gmaps</nga-card-header>
      <nga-card-body>
        <agm-map [latitude]="lat" [longitude]="lng">
          <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
        </agm-map>
      </nga-card-body>
    </nga-card>
  `,
})
export class GmapsComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;
}
