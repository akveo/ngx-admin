import { Component, OnInit } from '@angular/core';
import { DataTablesService } from './dataTables.service';

@Component({
  selector: 'data-tables',
  templateUrl: './dataTables.html',
  styleUrls: ['./dataTables.scss']
})
export class DataTables {

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(protected service: DataTablesService) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
