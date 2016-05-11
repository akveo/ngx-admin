import {Component, ViewEncapsulation} from '@angular/core';
import {BaCard} from '../../../../theme/components';

import {layoutColors, layoutPaths} from "../../../../theme/theme.constants";
import {LineMapsService} from "./lineMaps.service";

require('ammap3');
require('ammap3/ammap/maps/js/worldLow');

@Component({
  selector: 'line-maps',
  pipes: [],
  providers: [LineMapsService],
  // otherwise maps won't work
  encapsulation: ViewEncapsulation.None,
  styles: [require('ammap3/ammap/ammap.css'), require('./lineMaps.scss')],
  directives: [BaCard],
  template: require('./lineMaps.html'),
})
export class LineMaps {

  constructor(private _lineMapsService:LineMapsService) {
  }

  ngAfterViewInit() {

    var map = AmCharts.makeChart('map-lines', {
      type: 'map',
      theme: this._lineMapsService.getTheme(),
      dataProvider: this._lineMapsService.getDataProvider(),

      areasSettings: {
        unlistedAreasColor: layoutColors.info
      },

      imagesSettings: {
        color: layoutColors.warningBg,
        selectedColor: layoutColors.warning
      },

      linesSettings: {
        color: layoutColors.warningBg,
        alpha: 0.8
      },

      backgroundZoomsToTop: true,
      linesAboveImages: true,

      export: {
        'enabled': true
      },
      pathToImages: layoutPaths.images.amMap
    });
  }
}
