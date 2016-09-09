import { Component,OnInit,ViewEncapsulation} from '@angular/core';
import { CalendarModule} from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { EasyqService } from '../../../shared/service/easyq.service.ts';
import {NG2_SMART_TABLE_DIRECTIVES} from 'ng2-smart-table';
import {LocalDataSource} from 'ng2-smart-table';


@Component({
  template: `
<div class="widgets">
  <div class="row">
    <ba-card title="Basic Example" baCardClass="with-scroll">
      <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
    </ba-card>
  </div>

</div>
  `,
  directives: [],
  styles: [require('../../tables/components/smartTables/smartTables.scss')],
  encapsulation: ViewEncapsulation.None,
})
export class Hour24ChannelDetailSmart implements OnInit {

  rows:any[];

  source:LocalDataSource = new LocalDataSource();

  from:string;

  to:string;

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false
    },
    columns: {

      date: {
        title: '日期',
        type: 'string'
      },
      channel_name: {
        title: '频道',
        type: 'string'
      },
      last_name: {
        title: 'Last Name',
        type: 'string'
      },
      anchor_uid: {
        title: '主播UID',
        type: 'number'
      },
      nick: {
        title: '昵称',
        type: 'string'
      },
      start_time: {
        title: '开始时间',
        type: 'string'
      },
      end_time: {
        title: '结束时间',
        type: 'string'
      },
      pcu: {
        title: 'pcu',
        type: 'number'
      },
      dau: {
        title: 'dau',
        type: 'number'
      },
      //avg_duration: {
      //  title: '人均观看时长',
      //  type: 'number'
      //}
      //,
      //exposed_cnt: {
      //  title: '曝光数',
      //  type: 'number'
      //},
      //jump_rate: {
      //  title: '跳出率',
      //  type: 'number'
      //}
    }
  };

  constructor(private easyqService:EasyqService) {
  }

  ngOnInit() {
    this.doFilter();
  }

  private doFilter():void {

    this.easyqService.getData({
      table: 'bproduct_me_24_hour_daily_details',
      //filter: '((date >="' + this.from + '") and (date <="' + this.to + '"))',
      order: 'date desc'
    }).subscribe((rows) => {
      this.source.load(rows);
    });
  }

  private onSelect(selectedDate:string) {
    this.doFilter();
  }
}
