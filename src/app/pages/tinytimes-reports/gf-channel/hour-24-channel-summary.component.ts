import { Component,OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

import { Observable } from 'rxjs/Observable';
import { EasyqService } from '../../../shared/service/easyq.service.ts';
import { NumToPercentPipe } from '../../../shared/pipes/format'

@Component({
  selector: 'simple-chart-example',
  directives: [CHART_DIRECTIVES],
  template: `
        <div class="row">
          <div class="btn-group pull-right" role="group" aria-label="Basic example">
            <button type="button" (click)="onRangeClick(7)" class="btn btn-success">7天</button>
            <button type="button" (click)="onRangeClick(14)" class="btn btn-warning">14天</button>
            <button type="button" (click)="onRangeClick(30)" class="btn btn-danger">30天</button>
          </div>
        </div>
        <div class="row">
          <chart *ngIf="options" [options]="options"></chart>
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
export class Hour24ChannelSummaryComponent implements OnInit {

  private options:HighchartsOptions;

  table:string = 'bproduct_me_24_hour_daily_summary';

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
      pcu: {
        title: 'pcu',
        type: 'number'
      },
      dau: {
        title: 'dau',
        type: 'number'
      },
      acu: {
        title: 'acu',
        type: 'number'
      },
      avg_duration: {
        title: '人均观看时长',
        type: 'number'
      },
      e_income: {
        title: 'e豆收益',
        type: 'number'
      },
      exposed_cnt: {
        title: '曝光数',
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

  constructor(private easyqService:EasyqService) {
  }

  ngOnInit():void {
    this.render(7);
  }

  private render(range:number):void {

    let map = new Map<string,string>();
    map.set('103453445', 'ME热舞频道');
    map.set('103463393', 'ME声优官频');
    map.set('102472427', 'ME奇趣频道');
    map.set('103033285', 'ME音乐官频');

    Observable.forkJoin(
      Array.from(map.keys()).map(
        i => this.easyqService.getData({
          table: 'bproduct_me_channel_dau',
          filter: '(channel_uid=' + i + ')',
          order: 'date desc',
          limit: range
        })
      )).subscribe((recordsArr) => {

        let dates:string[];

        recordsArr = recordsArr.map(records => {

          records.reverse();

          let points:number[] = records.map(record => {
            return record.dau
          });

          dates = records.map(record => {
            return record.date
          });

          let channelUid = records[0].channel_uid;
          return {
            name: map.get(channelUid.toString()),
            data: points
          };
        });

        this.options = {
          title: {text: '官方频道DAU'},
          xAxis: {
            categories: dates
          },
          yAxis: {
            title: {
              text: "用户数"
            }
          },
          series: recordsArr
        };
      }
    )
  }

  private onRangeClick(range:number):void {
    this.render(range);
  }
}
