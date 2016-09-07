import { Component,OnInit} from '@angular/core';
import { CalendarModule} from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { EasyqService } from '../../../shared/service/easyq.service.ts';
import '../../../shared/loader/jquery-ui-loader'

@Component({
  template: `
        <div class="ui-widget-header ui-helper-clearfix">
            <div class="row">
                <div class="col-md-6">
                  <div style="padding:4px">
                      Form:<p-calendar [(ngModel)]="from" dateFormat="yy-mm-dd" (onSelect) = "onSelect($event)"  ngDefaultControl></p-calendar>
                      To:<p-calendar [(ngModel)]="to" dateFormat="yy-mm-dd" (onSelect) = "onSelect($event)"  ngDefaultControl></p-calendar>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-right">
                    <button type="button" class="btn btn-success"(click)="dt.exportCSV()" value="export">导出</button>
                  </div>
                </div>
            </div>
        </div>
        <p-dataTable  scrollable="true" [value]="rows" #dt [value]="rows" [rows]="10" [paginator]="true"  [rowsPerPageOptions]="[5,10,20]">
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

  rows:any[];

  from:string;
  to:string;

  constructor(private easyqService:EasyqService) {
  }

  ngOnInit() {
    this.easyqService.getMaxDate('bproduct_me_24_hour_daily_details').subscribe((date:string) => {

      this.from = date;
      this.to = date;
      this.doFilter();
    });
  }

  private doFilter():void {

    this.easyqService.getData({
      table: 'bproduct_me_24_hour_daily_details',
      filter: '((date >="' + this.from + '") and (date <="' + this.to + '"))',
      order: 'date desc'
    }).subscribe((rows) => {
      this.rows = rows
    });
  }

  private onSelect(selectedDate:string) {
    this.doFilter();
  }
}
