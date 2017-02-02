import { Component, OnInit } from '@angular/core';

import { BasicTablesService } from '../../basic-tables.service';

@Component({
  selector: 'hover-table',
  templateUrl: './hover-table.component.html'
})
export class HoverTableComponent implements OnInit {

  metricsTableData: Array<any>;

  constructor(private _basicTablesService: BasicTablesService) { }

  ngOnInit(): void {
  	this.metricsTableData = this._basicTablesService.metricsTableData;
  }

}
