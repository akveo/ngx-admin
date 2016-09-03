import { Component,OnInit} from '@angular/core';
import { CHART_DIRECTIVES } from 'angular2-highcharts';

import {Observable} from 'rxjs/Observable';
import { DataProviderService } from '../../../../app/shared/data-provider.service';

@Component({
  selector: 'simple-chart-example',
  directives: [CHART_DIRECTIVES],
  template: `
        <chart *ngIf="options" [options]="options"></chart>
        <button (click)="onClick()">测试</button>
    `,
  styles: [
    `
      chart {
        display: block;
      }
      button {
        display: block;
        width: 100%;
        height: 25px;
      }
  `
  ],
  providers: []
})
export class GfChannelDau implements OnInit {

  private options:HighchartsOptions;

  constructor(private dataProviderService:DataProviderService) {
  }

  ngOnInit():void {

    let map = new Map<string,string>();
    map.set('103453445','ME热舞频道');
    map.set('103463393','ME声优官频');
    map.set('102472427', 'ME奇趣频道');
    map.set('103033285', 'ME音乐官频');

    Observable.forkJoin(
      Array.from(map.keys()).map(
        i => this.dataProviderService.get({
          table: 'bproduct_me_channel_dau',
          filter: '(channel_uid=' + i + ')',
          order: 'date desc',
          offset: 0,
          limit: 10
        })
      )).subscribe((recordsArr) => {

        let dates:string[];

        recordsArr = recordsArr.map(records => {

          records.reverse();

          let points:number[] = records.map(record => {return record.dau});

          dates = records.map(record => {return record.date});

          let channelUid = records[0].channel_uid;
          return {
            name : map.get(channelUid.toString()),
            data: points
          };
        });

        this.options = {
          title: {text: '官方频道DAU'},
          xAxis:{
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

  private records:any[];

  onClick():void {

    let channelUids:string[] = ['103453445', '103463393'];

    Observable.forkJoin(
      channelUids.map(
        i => this.dataProviderService.get({
          table: 'bproduct_me_channel_dau',
          filter: '(channel_uid=' + i + ')',
          order: 'date desc',
          offset: 0,
          limit: 10
        })
      )).subscribe(records => console.log('len is ' + records[0].length))
  }
}
