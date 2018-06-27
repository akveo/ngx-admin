import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { EcDashboardComponent } from './ec-dashboard.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartsHeaderComponent } from './charts-panel/charts-header/charts-header.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { EcMapComponent } from './map/ec-map.component';
import { EcMapService } from './map/ec-map.service'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EcMapChartComponent } from './map/chart/ec-map-chart.component';
import { StatsAreaChartComponent } from './profit-card/front-side/stats-area-chart.component';
import { StatsBarChartComponent } from './profit-card/back-side/stats-bar-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { EcChartsPanelComponent } from './charts-panel/charts-panel.component';
import { TrafficCardComponent } from './traffic-card/traffic-card.component';
import { TrafficBarChartComponent } from './traffic-card/traffic-bar-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    EcDashboardComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarChartComponent,
    ProfitCardComponent,
    EcChartsPanelComponent,
    ChartsHeaderComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    EcMapComponent,
    EcMapChartComponent,
    TrafficCardComponent,
    TrafficBarChartComponent,
  ],
  providers: [
    EcMapService,
  ],
})
export class EcDashboardModule { }
