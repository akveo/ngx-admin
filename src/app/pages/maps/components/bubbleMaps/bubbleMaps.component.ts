import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

import {layoutPaths} from "../../../../theme/theme.constants";
import {BubbleMapsService} from "./bubbleMaps.service";

require('ammap3');
require('ammap3/ammap/maps/js/worldLow');
// TODO: use baAmChart instead of this 
@Component({
  selector: 'bubble-maps',
  pipes: [],
  providers: [BubbleMapsService],
  // otherwise maps won't work
  encapsulation: ViewEncapsulation.None,
  styles: [require('ammap3/ammap/ammap.css'), require('./bubbleMaps.scss')],
  directives: [BaCard],
  template: require('./bubbleMaps.html'),
})
export class BubbleMaps {

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngAfterViewInit() {
    AmCharts.theme = this._bubbleMapsService.getTheme();

    let map = new AmCharts.AmMap();

    map.addTitle('Population of the World in 2011', 14);
    map.addTitle('source: Gapminder', 11);
    map.areasSettings = {
      unlistedAreasColor: '#000000',
      unlistedAreasAlpha: 0.1
    };
    map.imagesSettings.balloonText = '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>';
    map.pathToImages = layoutPaths.images.amMap;

    let dataProvider = {
      mapVar: AmCharts.maps.worldLow,
      images: []
    };

    map.dataProvider = this._bubbleMapsService.getDataProvider(dataProvider);
    map.export = {
      enabled: true
    };

    map.write('map-bubbles');
  }
}
