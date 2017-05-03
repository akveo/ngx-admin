import { Component } from '@angular/core';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

@Component({
  selector: 'sheet-demo',
  templateUrl: './sheet-demo.html'
})
export class SheetDemoComponent {
   data:Array<any>;
   options:any;

  constructor() {
    this.data = Handsontable.helper['createSpreadsheetData'](100, 12); // tslint:disable-line:no-string-literal
    this.options = {
      height: 396,
      colHeaders: true,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true
    };
  }
}
