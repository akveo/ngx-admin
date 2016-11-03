import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'morris-bar-chart',
  templateUrl: 'morrisBarChart.component.html',
  styles: [require('./morrisBArChart.scss')],
  providers : []
})


export class MorrisBarChart implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(this.barChartData === null || this.barChartData === undefined) return;
    window['morrisObj'] =
      new window['Morris'].Bar({
        element: 'morris-bar-chart',
        data: this.barChartData.data,
        xkey: this.barChartData.xkey,
        ykeys: this.barChartData.ykey,
        labels: this.barChartData.lables,
        barColors : this.barChartData.lineColors,
        pointSize: 2,
        hideHover: 'auto',
        resize: true
      });
  }

  @Input() barChartData : BarChartData = null;
}



export class BarChartData {
  public xkey : Array<string>;
  public ykey : Array<string>;
  public lables : Array<string>;
  public lineColors : Array<string>;
  public data : Array<any>;
  constructor(){
    this.data = [];
  }
}
