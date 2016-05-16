import {Injectable} from '@angular/core';
import {layoutColors} from '../../../theme';

@Injectable()
export class TrafficChartService {

  private _palette = layoutColors.bgColorPalette;
  private _data = [
    {
      value: 1000,
      color: this._palette.gossip,
      highlight: this._palette.gossipDark,
      label: 'Ad Campaigns',
      percentage: 17,
      order: 0,
    },{
      value: 1400,
      color: this._palette.white,
      highlight: this._palette.whiteDark,
      label: 'Other',
      percentage: 87,
      order: 1,
    }, {
      value: 1500,
      color: this._palette.blueStone,
      highlight: this._palette.blueStoneDark,
      label: 'Search engines',
      percentage: 22,
      order: 4,
    }, {
      value: 1000,
      color: this._palette.surfieGreen,
      highlight: this._palette.surfieGreenDark,
      label: 'Referral Traffic',
      percentage: 70,
      order: 3,
    }, {
      value: 1200,
      color: this._palette.silverTree,
      highlight: this._palette.silverTreeDark,
      label: 'Direct Traffic',
      percentage: 38,
      order: 2,
    },
  ];

  getData() {
    return this._data;
  }
}
