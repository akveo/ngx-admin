import { Component, OnInit } from '@angular/core';

import { BasicTablesService } from '../../basic-tables.service';

@Component({
  selector: 'condensed-table',
  templateUrl: './condensed-table.component.html'
})
export class CondensedTableComponent implements OnInit {

  peopleTableData: Array<any>;

  constructor(private _basicTablesService: BasicTablesService) { }

  ngOnInit(): void {
    this.peopleTableData = this._basicTablesService.peopleTableData;
  }
}
