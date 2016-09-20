import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NumToPercentPipe } from '../../../shared/pipes/format'
import { ReportDescBody } from '../../../shared/component/me-report-desc/me-report-desc.component'

@Component({
  selector: 'simple-chart-example',
  directives: [],
  template: `
    <div>
        <me-simple-chart [table]="table" [settings]="settings"></me-simple-chart>
        <div style="margin-top: 15px">
            <me-simple-table [table]="table" [settings]="settings"></me-simple-table>
        </div>
        <div style="margin-top: 15px;">
            <me-report-desc [descBody]="descBody"></me-report-desc>
        </div>
    </div>
    `,
  styles: [
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
        title: '曝光人数',
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

  descBody:ReportDescBody = {
    //报表生成链接
    url: "https://cloud.hiido.com/calculation/schedule/job/detail/6000021200?tab=info",
    rows: [
      {
        name: "频道",
        desc: "官频名称：如热舞、奇趣、音乐等"
      },
      {
        name: "频道ID",
        desc: "官频对应的ID,此处并非指频道ID(LID)"
      },
      {
        name: "DAU",
        desc: "当天官频开播期间的总观看人数"
      },
      {
        name: "PCU",
        desc: "当天官频开播期间的最高在线人数"
      },
      {
        name: "ACU",
        desc: "当天官频开播期间的平均在线人数"
      },
      {
        name: "人均观看时长",
        desc: "当天观看人数的平均观看时长，精确到分钟"
      },
      {
        name: "E豆收益",
        desc: "官频开播期间的累计E豆收益"
      },
      {
        name: "曝光人数",
        desc: "官频开播期间的累计曝光人数"
      },
      {
        name: "频道ID",
        desc: "官频对应的ID,此处并非指频道ID(LID)"
      },
      {
        name: "跳出率",
        desc: "观看官频不超过1分钟的人次/观看官频的总人次"
      }
    ]
  };

  ngOnInit():void {
  }

}
