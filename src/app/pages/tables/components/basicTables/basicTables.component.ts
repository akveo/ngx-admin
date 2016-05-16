import {Component, ViewEncapsulation} from '@angular/core';

import {BasicTablesService} from './basicTables.service';
import {BaCard} from '../../../../theme/components';
import {HoverTable} from './components/hoverTable';
import {BorderedTable} from './components/borderedTable';
import {CondensedTable} from './components/condensedTable';
import {StripedTable} from './components/stripedTable';
import {ContextualTable} from './components/contextualTable';
import {ResponsiveTable} from './components/responsiveTable';

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, HoverTable, BorderedTable, CondensedTable, StripedTable, ContextualTable, ResponsiveTable],
  styles: [require('./basicTables.scss')],
  template: require('./basicTables.html'),
  providers: [BasicTablesService]
})
export class BasicTables {

  constructor() {
  }
}
