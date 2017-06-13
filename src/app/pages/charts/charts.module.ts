import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { ChartJsBarComponent } from './chart.js/bar/bar.component';
import { ChartJsLineComponent } from './chart.js/line/line.component';
import { ChartJsPieComponent } from './chart.js/pie/pie.component';
import { D3BarComponent } from './d3/bar/bar.component';
import { D3LineComponent } from './d3/line/line.component';
import { D3PieComponent } from './d3/pie/pie.component';
import { EchartsLineComponent } from './echarts/line/line.component';
import { EchartsPieComponent } from './echarts/pie/pie.component';
import { EchartsBarComponent } from './echarts/bar/bar.component';
import { AngularEchartsModule } from 'angular2-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule as Ng2Charts } from 'ng2-charts/ng2-charts';

const components = [
  ChartJsBarComponent,
  ChartJsLineComponent,
  ChartJsPieComponent,
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
];

@NgModule({
  imports: [
    SharedModule,
    ChartsRoutingModule,
    AngularEchartsModule,
    NgxChartsModule,
    Ng2Charts,
  ],
  declarations: [
    ...routedComponents,
    ...components,
  ],
})
export class ChartsModule { }
