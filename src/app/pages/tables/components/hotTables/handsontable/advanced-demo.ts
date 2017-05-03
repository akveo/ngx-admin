import { Component } from '@angular/core';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';
import { getAdvancedData } from './data';


@Component({
  selector: 'advanced-demo',
  templateUrl: './advanced-demo.html'
})
export class AdvancedDemoComponent {
   data:Array<any>;
   colHeaders:Array<string>;
   columns:Array<any>;
   options:any;

  constructor() {
    this.data = getAdvancedData();
    this.colHeaders = ['Country', 'Level', 'Units', 'As Of', '1Y Chg', '5Y Ago', '10Y Ago', '25Y Ago'];
    this.columns = [
      {data: 0, type: 'text'},
      {data: 1, type: 'numeric', format: '0,0.00[0000]'},
      {data: 2, type: 'text'},
      {data: 3, type: 'numeric', format: '0'},
      {data: 4, type: 'numeric', format: '0.00%', 
       renderer: function percentRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.NumericRenderer.apply(this, arguments);
        td.style.color = 'white';
      }},
      {data: 5, type: 'numeric', format: '0,0.00[0000]'},
      {data: 6, type: 'numeric', format: '0,0.00[0000]'}
    ];
    this.options = {
      height: 396,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      className: 'htCenter htMiddle',
      readOnly: true
    };
  }
}
