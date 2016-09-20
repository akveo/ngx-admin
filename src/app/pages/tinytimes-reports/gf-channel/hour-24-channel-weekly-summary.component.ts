import { Component, ViewEncapsulation } from '@angular/core';
import { NumToPercentPipe } from '../../../shared/pipes/format'

@Component({
  template: `
      <me-simple-table [table]="table" [settings]="settings"></me-simple-table>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
})
export class Hour24ChannelWeeklySummaryComponent {

  table:string = 'bproduct_me_24_hour_weekly_summary';

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
      channel_uid: {
        title: '频道ID',
        type: 'number'
      },
      wau: {
        title: 'WAU',
        type: 'number'
      },
      avg_dau: {
        title: '日均DAU',
        type: 'number'
      },
      max_pcu: {
        title: '最大PCU',
        type: 'number'
      },
      avg_pcu: {
        title: '日均PCU',
        type: 'number'
      },
      avg_acu: {
        title: '日均ACU',
        type: 'number'
      },
      avg_duration: {
        title: '日均观看时长',
        type: 'number'
      },
      e_income: {
        title: 'E豆收益',
        type: 'number'
      },
      avg_exposed_cnt: {
        title: '日均曝光人数',
        type: 'number'
      },
      avg_jump_rate: {
        title: '日均跳出率',
        type: 'number',
        valuePrepareFunction: (value) => {
          return new NumToPercentPipe().transform(value, 2);
        }
      }
    }
  };
}
