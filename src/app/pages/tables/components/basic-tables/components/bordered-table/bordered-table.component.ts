import { Component, OnInit } from '@angular/core';

import { BasicTablesService } from '../../basic-tables.service';

@Component({
  selector: 'bordered-table',
  templateUrl: './bordered-table.component.html',
})
export class BorderedTableComponent implements OnInit {

  metricsTableData: Array<any>;

  constructor(private _basicTablesService: BasicTablesService) { }

  ngOnInit(): void {
  	this.metricsTableData = this._basicTablesService.metricsTableData;
  }

}
