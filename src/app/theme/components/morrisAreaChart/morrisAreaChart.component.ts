import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'morris-area-chart',
  templateUrl: 'morrisAreaChart.component.html',
  styles: [require('./morrisAreaChart.scss')],
  providers : []
})


export class MorrisAreaChart implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(this.areaData === null || this.areaData === undefined) return;
    window['morrisObj']  =
      new window['Morris'].Area({
        element: 'morris-area-chart',
        data: this.areaData.data,
        xkey: this.areaData.xkey,
        ykeys: this.areaData.ykey,
        labels: this.areaData.lables,
        lineColors : this.areaData.lineColors,
        pointSize: 2,
        hideHover: 'auto',
        resize: true
      });
  }

  @Input() areaData : AreaChartData = null;
}



export class AreaChartData {
  public xkey : Array<string>;
  public ykey : Array<string>;
  public lables : Array<string>;
  public lineColors : Array<string>;
  public data : Array<any>;
  constructor(){
    this.data = [];
  }
}
