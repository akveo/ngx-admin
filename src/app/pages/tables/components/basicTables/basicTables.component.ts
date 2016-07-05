import {Component, ViewEncapsulation} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs/Rx";

import {BasicTablesService} from './basicTables.service';
import {BaCard} from '../../../../theme/components';
import {HoverTable} from './components/hoverTable';
import {BorderedTable} from './components/borderedTable';
import {CondensedTable} from './components/condensedTable';
import {StripedTable} from './components/stripedTable';
import {ContextualTable} from './components/contextualTable';
import {ResponsiveTable} from './components/responsiveTable';
import {RemoteDataTable} from "./components/remoteDataTable/remoteDataTable.component";
import {RemoteDataService} from "./components/remoteDataTable/remoteDataTable.service";
import {Data} from "./components/remoteDataTable/remoteData.class";

@Component({
  selector: 'basic-tables',
  pipes: [AsyncPipe],
  encapsulation: ViewEncapsulation.None,
  directives: [
    BaCard,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable,
    RemoteDataTable
  ],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./basicTables.scss')],
  template: require('./basicTables.html'),
  providers: [BasicTablesService, RemoteDataService]
})
export class BasicTables {
    public data:Observable<Data[]>;

  constructor(private _DataService: RemoteDataService) { };

  ngOnInit() { this.getData(); };
  getData() { this.data= this._DataService.getData(); };

}
