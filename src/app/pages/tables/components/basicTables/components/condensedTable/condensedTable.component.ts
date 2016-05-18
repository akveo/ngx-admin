import {Component} from '@angular/core';

import {BaAppPicturePipe} from '../../../../../../theme/pipes';
import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'condensed-table',
  template: require('./condensedTable.html'),
  pipes: [BaAppPicturePipe]
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.peopleTableData = _basicTablesService.peopleTableData;
  }
}
