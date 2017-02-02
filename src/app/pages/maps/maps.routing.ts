import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps.component';
import { BubbleMapsComponent } from './components/bubble-maps/bubble-maps.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { LeafletMapsComponent } from './components/leaflet-maps/leaflet-maps.component';
import { LineMapsComponent } from './components/line-maps/line-maps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
      { path: 'bubblemaps', component: BubbleMapsComponent },
      { path: 'googlemaps', component: GoogleMapsComponent },
      { path: 'leafletmaps', component: LeafletMapsComponent },
      { path: 'linemaps', component: LineMapsComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
