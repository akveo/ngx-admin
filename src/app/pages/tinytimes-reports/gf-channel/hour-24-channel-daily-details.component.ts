import { Component, ViewEncapsulation } from '@angular/core';
import { NumToPercentPipe } from '../../../shared/pipes/format'

@Component({
  template: `
      <me-simple-table [table]="table" [settings]="settings"></me-simple-table>
  `,
  styles: [
    `th.ng2-smart-th.start_time {
      width: 180px;
     }`,
    `th.ng2-smart-th.end_time {
      width: 180px;
     }
    `
  ],
  encapsulation: ViewEncapsulation.None,
})
export class Hour24ChannelDailyDetailsComponent {

  table:string = 'bproduct_me_24_hour_daily_details';

  settings = {

    columns: {

      date: {
        title: '日期',
        type: 'string'
      },
      channel_name: {
        title: '频道',
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
      e_income: {
        title: 'e豆收益',
        type: 'number'
      },
      avg_duration: {
        title: '人均观看时长',
        type: 'number'
      },
      exposed_cnt: {
        title: '曝光人数',
        type: 'number'
      },
      jump_rate: {
        title: '跳出率',
        type: 'number',
        valuePrepareFunction: (value) => {
          return new NumToPercentPipe().transform(value, 2);
        }
      }
    }
  };
}
