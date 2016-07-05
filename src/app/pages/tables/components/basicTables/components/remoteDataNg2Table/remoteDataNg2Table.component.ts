import {Component, OnInit, Input} from '@angular/core';
import {DataNg2} from "./remoteDataNg2.class";
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NG_TABLE_DIRECTIVES} from "ng2-table/ng2-table";

@Component({
  selector: 'remote-data-ng2-table',
  template: require('./dataTableSimple.html'),
  directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RemoteDataNg2Table implements OnInit {

  @Input('datang2') datang2: DataNg2[] = [];

  //
  ngOnChanges(changes:any):void {
    this.datang2 = changes.datang2.currentValue ? changes.datang2.currentValue : [];
    this.onChangeTable(this.config);
  };

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'id', name: 'id'},
    {title: 'name', name: 'name'},
    {title: 'description', name: 'description'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: false,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'id'}
  };

  public constructor() {
    this.length = this.datang2.length;
  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.datang2):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(datang2:any, config:any):any {
    if ((!config.sorting) || (!datang2.length)) {
      return data;
    }
    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return datang2;
    }

      // simple sorting
    return datang2.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    if ((!config.filtering) || (!data.length)) {
      return data;
    }

    console.log(this.config.filtering.filterString);
    console.log(config.filtering.columnName);
    console.log(data[0][config.filtering.columnName]);
    let filteredData:Array<any> = data.filter((item:any) =>
      String(item[config.filtering.columnName]).match(this.config.filtering.filterString));

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.datang2, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
