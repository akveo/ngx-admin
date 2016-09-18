import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
      <comm-simple-table [table]="table" [settings]="settings"></comm-simple-table>
  `,
  directives: [],
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
export class Hour24ChannelDetailSmartComponent {

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
      dau: {
        title: 'dau',
        type: 'number'
      },
    }
  };
}
