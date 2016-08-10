import {Component, ViewEncapsulation} from '@angular/core';

import {BasicTablesService} from './basicTables.service';
import {BaCard} from '../../../../theme/components';

import {NG2_SMART_TABLE_DIRECTIVES, LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, NG2_SMART_TABLE_DIRECTIVES],
  styles: [require('./smartTables.scss')],
  template: require('./smartTables.html'),
  providers: [BasicTablesService]
})
export class SmartTables {

  settings = {
    attr: {
      class: 'table'
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      name: {
        title: 'Product Name',
        type: 'string'
      }
    }
  };
  source: LocalDataSource = new LocalDataSource();
}
