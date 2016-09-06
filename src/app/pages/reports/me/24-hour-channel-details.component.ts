import { Component,OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { EasyqService } from '../../../shared/easyq.service.ts';

@Component({
  template: `
        <p-dataTable  scrollable="true" [value]="rows" #dt [value]="rows" [rows]="10" [paginator]="true">
          <header>
            <div class="ui-widget-header ui-helper-clearfix" style="padding:4px 10px 4px 0px;border-bottom: 0 none">
                <button type="button" class="btn btn-success btn-icon"(click)="dt.exportCSV()" style="float:left" value="export">导出</button>
            </div>
          </header>
          <p-column field="date" header="日期" [sortable]="true"></p-column>
          <p-column field="channel_name" header="频道" [filter]="true"></p-column>
          <p-column field="anchor_uid" header="主播UID" [sortable]="true" [filter]="true"></p-column>
          <p-column field="nick" header="昵称"></p-column>
          <p-column field="start_time" header="开始时间" [sortable]="true">
            <template let-col let-row="rowData" pTemplate type="body">
              <span>{{row[col.field] | date:"HH:mm:ss"}}</span>
            </template>
          </p-column>
          <p-column field="end_time" header="结束时间">
            <template let-col let-row="rowData" pTemplate type="body">
              <span>{{row[col.field] | date:"HH:mm:ss"}}</span>
            </template>
          </p-column>
          <p-column field="pcu" header="pcu" [sortable]="true">></p-column>
          <p-column field="dau" header="dau"></p-column>
          <p-column field="e_income" header="e豆收入" [sortable]="true">></p-column>
          <p-column field="avg_duration" header="观看时长" [sortable]="true">>
            <template let-col let-row="rowData" pTemplate type="body">
                <span>{{row[col.field] | number:"1.0-2"}}</span>
            </template>
          </p-column>
          <p-column field="exposed_cnt" header="曝光数"></p-column>
          <p-column field="jump_rate" header="跳出率">
             <template let-col let-row="rowData" pTemplate type="body">
                <span>{{row[col.field] | number:"1.0-2"}}</span>
            </template>
          </p-column>
        </p-dataTable>
  `
})
export class Hour24ChannelDetail implements OnInit {

  private rows:any[];

  constructor(private easyqService:EasyqService) {
  }

  ngOnInit() {

    this.easyqService.getData({
      table: 'bproduct_me_24_hour_daily_details',
      order: 'date desc'
    }).subscribe((rows) => {
      this.rows = rows
    });
  }
}
