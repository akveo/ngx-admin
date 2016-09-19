import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NumToPercentPipe } from '../../../shared/pipes/format'

@Component({
  selector: 'simple-chart-example',
  directives: [],
  template: `
        <div class="row">
          <me-simple-chart [table]="table" [settings]="settings"></me-simple-chart>
        </div>
        <div class="row" style="margin-top: 15px;">
          <comm-simple-table [table]="table" [settings]="settings"></comm-simple-table>
        </div>
    `,
  styles: [
    `
      chart {
        display: block;
      }
    `
  ],
  providers: []
})
export class Hour24ChannelDailySummaryComponent implements OnInit {


  table:string = 'bproduct_me_24_hour_daily_summary';

  settings = {

    columns: {
      date: {
        title: '日期',
        type: 'string'
      },
      channel_name: {
        title: '频道',
        type: 'string',
        isChartNameColumn: true
      },
      channel_uid: {
        title: '频道ID',
        type: 'number',
        isChartKeyColumn: true
      },
      pcu: {
        title: 'pcu',
        type: 'number',
        isDisplayChart: true
      },
      dau: {
        title: 'dau',
        type: 'number',
        isDisplayChart: true
      },
      acu: {
        title: 'acu',
        type: 'number',
        isDisplayChart: true
      },
      avg_duration: {
        title: '人均观看时长',
        type: 'number',
        isDisplayChart: true
      },
      e_income: {
        title: 'e豆收益',
        type: 'number',
        isDisplayChart: true
      },
      exposed_cnt: {
        title: '曝光数',
        type: 'number',
        isDisplayChart: true
      },
      jump_rate: {
        title: '跳出率',
        type: 'number',
        isDisplayChart: true,
        valuePrepareFunction: (value) => {
          return new NumToPercentPipe().transform(value, 2);
        }
      }
    }
  };

  ngOnInit():void {
  }

}
