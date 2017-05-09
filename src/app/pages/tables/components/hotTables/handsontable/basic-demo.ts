import { Component } from '@angular/core';
import { genData } from './data';

@Component({
  selector: 'basic-demo',
  templateUrl: './basic-demo.html'
})
export class BasicDemoComponent {
   data: Array<any> = genData(10);
   colHeaders: Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
    'Favorite food', 'Price', 'Is active'];
   columns: Array<any> = [
    {
      data: 'id'
    },
    {
      data: 'name.first',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'name.last',
      readOnly: true
    },
    {
      data: 'address'
    },
    {
      data: 'product.description',
      source: 'product.options',
      optionField: 'description',
      type: 'autocomplete',
      strict: false,
      visibleRows: 4
    },
    {
      data: 'price',
      type: 'numeric',
      format: '$ 0,0.00'
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
  ];
  colWidths: Array<number> = [null, null, null, null, null, null, 30];
  options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  afterChange(e: any) {
    console.log(e);
  }

  afterOnCellMouseDown(e: any) {
    console.log(e);
  }
}
