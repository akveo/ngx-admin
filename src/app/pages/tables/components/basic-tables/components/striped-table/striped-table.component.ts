import { Component, OnInit } from '@angular/core';

import { BasicTablesService } from '../../basic-tables.service';

@Component({
  selector: 'striped-table',
  templateUrl: './striped-table.component.html'
})
export class StripedTableComponent implements OnInit {

  smartTableData: Array<any>;

  constructor(private _basicTablesService: BasicTablesService) { }

  ngOnInit(): void {
  	this.smartTableData = this._basicTablesService.smartTableData;
  }

}
