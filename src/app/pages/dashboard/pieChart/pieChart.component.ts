import {Component, ViewEncapsulation} from 'angular2/core';

import {BaCard} from '../../../theme/components';
import './pieChart.loader.ts';

@Component({
  selector: 'pie-chart',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  styles: [require('./pieChart.scss')],
  template: require('./pieChart.html')
})
export class PieChart {

  charts = [
    {
      color: 'rgba(255,255,255,0.4)',
      description: 'New Visits',
      stats: '57,820',
      icon: 'person',
    }, {
      color: 'rgba(255,255,255,0.4)',
      description: 'Purchases',
      stats: '$ 89,745',
      icon: 'money',
    }, {
      color: 'rgba(255,255,255,0.4)',
      description: 'Active Users',
      stats: '178,391',
      icon: 'face',
    }, {
      color: 'rgba(255,255,255,0.4)',
      description: 'Returned',
      stats: '32,592',
      icon: 'refresh',
    }
  ];

  private _init = false;

  constructor() {
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {

    $('.chart').each(function () {
      let chart = $(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: $(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min };

    $('.pie-charts .chart').each(function(index, chart) {
      $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
