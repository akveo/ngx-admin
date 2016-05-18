import {Component} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'bordered-table',
  template: require('./borderedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class BorderedTable {

  metricsTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
}
