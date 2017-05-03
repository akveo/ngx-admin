import { Component } from '@angular/core';
import { getFinanceData } from './data';

@Component({
  selector: 'finance-demo',
  templateUrl: './finance-demo.html'
})
export class FinanceDemoComponent {
   data:Array<any>;
   colHeaders:Array<string>;
   columns:Array<any>;
   options:any;

  constructor() {
    this.data = getFinanceData();
    this.colHeaders = ['Price', 'Date', '1D Chg', 'YTD Chg', 'Vol BTC'];
    this.columns = [
      {type: 'numeric', format: '$0,0.00'},
      {type: 'date', dateFormat: 'DD/MM/YYYY', correctFormat: true},
      {type: 'numeric', format: '0.00%'},
      {type: 'numeric', format: '0.00%'},
      {type: 'numeric', format: '0.00'}
    ];
    this.options = {
      height: 396,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true
    };
  }
}
