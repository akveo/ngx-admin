import {Component} from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'condensed-table',
  templateUrl: './condensedTable.html'
})
export class CondensedTable {

  peopleTableData:Array<any>;

  constructor(private _basicTablesService: BasicTablesService) {
    this.peopleTableData = _basicTablesService.peopleTableData;
  }
}
