import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
@Component({
  selector: 'ngx-with-options',
  templateUrl: './with-options.component.html',
  // styleUrls: ['./with-options.component.scss']
})
export class WithOptionsComponent implements OnInit {

  constructor() { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
