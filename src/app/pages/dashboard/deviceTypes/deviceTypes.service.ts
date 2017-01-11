import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import {DashboardService} from "../dashboard.service";
import {Observable} from "rxjs";

@Injectable()
export class DeviceTypesService {

  constructor(private _baConfig: BaThemeConfigProvider, private _dashboardService: DashboardService) {

  }

  getData(): Observable<Object[]> {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    let colorNames = Object.keys(dashboardColors);

    return this._dashboardService.getNumberOfDevicesForEachType()
      .map(o => Object.keys(o).map((key, index, arr) => ({
        value: o[key],
        color: dashboardColors[ colorNames[ colorNames.length % (index + 1)] ],
        highlight: colorHelper.shade(dashboardColors[ colorNames [colorNames.length % (index + 1)] ], 15),
        label: key,
        order: index,
      })));
  }
}
