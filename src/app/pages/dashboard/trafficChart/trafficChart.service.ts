import {Injectable} from 'angular2/core';
import {layoutColors} from '../../../theme';

@Injectable()
export class TrafficChartService {

  private _palette = layoutColors.bgColorPalette;
  private _data = [
    {
      value: 2000,
      color: this._palette.white,
      highlight: this._palette.whiteDark,
      label: 'Ad Campaigns',
      percentage: 87,
      order: 0,
    },
    {
      value: 400,
      color: this._palette.gossip,
      highlight: this._palette.gossipDark,
      label: 'Other',
      percentage: 17,
      order: 1,
    },
    {
      value: 1200,
      color: this._palette.silverTree,
      highlight: this._palette.silverTreeDark,
      label: 'Direct Traffic',
      percentage: 38,
      order: 2,
    },
    {
      value: 1000,
      color: this._palette.surfieGreen,
      highlight: this._palette.surfieGreenDark,
      label: 'Referral Traffic',
      percentage: 70,
      order: 3,
    },
    {
      value: 1500,
      color: this._palette.blueStone,
      highlight: this._palette.blueStoneDark,
      label: 'Search engines',
      percentage: 22,
      order: 4,
    }
  ];

  getData() {
    return this._data;
  }
}
