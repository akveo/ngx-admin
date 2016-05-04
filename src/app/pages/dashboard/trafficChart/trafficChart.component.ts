import {Component, ViewEncapsulation, ElementRef} from 'angular2/core';
import {layoutColors} from "../../../theme";
import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
  selector: 'traffic-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./trafficChart.scss')],
  template: require('./trafficChart.html')
})
export class TrafficChart {

  palette = layoutColors.bgColorPalette;
  doughnutData = [
    {
      value: 2000,
      color: this.palette.white,
      highlight: this.palette.whiteDark,
      label: 'Ad Campaigns',
      percentage: 87,
      order: 0,
    },
    {
      value: 400,
      color: this.palette.gossip,
      highlight: this.palette.gossipDark,
      label: 'Other',
      percentage: 17,
      order: 1,
    },
    {
      value: 1200,
      color: this.palette.silverTree,
      highlight: this.palette.silverTreeDark,
      label: 'Direct Traffic',
      percentage: 38,
      order: 2,
    },
    {
      value: 1000,
      color: this.palette.surfieGreen,
      highlight: this.palette.surfieGreenDark,
      label: 'Referral Traffic',
      percentage: 70,
      order: 3,
    },
    {
      value: 1500,
      color: this.palette.blueStone,
      highlight: this.palette.blueStoneDark,
      label: 'Search engines',
      percentage: 22,
      order: 4,
    }
  ];


  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = DOM.querySelector(this._elementRef.nativeElement, '.chart-area');
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }

}
