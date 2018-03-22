import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { ThemeModule } from '../../@theme/theme.module';
import { EcDashboardComponent } from './ec-dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { OrdersChartComponent } from './charts-panel/orders/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/profit/profit-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './stats-card/back-side/stats-card-back.component';
import { EcMapComponent } from './map/ec-map.component';
import { EcMapService } from './map/ec-map.service'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EcMapChartComponent } from './map/chart/ec-map-chart.component';


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
    StatsCardComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    EcMapComponent,
    EcMapChartComponent,
  ],
  providers: [
    EcMapService,
  ],
})
export class EcDashboardModule { }
