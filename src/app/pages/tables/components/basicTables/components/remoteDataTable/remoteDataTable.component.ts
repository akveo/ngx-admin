import {Component, Input} from '@angular/core';
import {Data} from "./remoteData.class";

@Component({
  selector: 'remote-data-table',
  template: require('./remoteDataTable.html'),
})
export class RemoteDataTable {

  @Input('data') data: Data[] = [];

  constructor() {
  }
}
