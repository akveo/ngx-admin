import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { EcDashboardComponent } from './ec-dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './stats-card/back-side/stats-card-back.component';
import { EcMapComponent } from './map/ec-map.component';
import { EcMapService } from './map/ec-map.service'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EcMapChartComponent } from './map/chart/ec-map-chart.component';
import { StatsAreaChartComponent } from './stats-card/front-side/stats-area-chart.component';
import { StatsCardFrontComponent } from './stats-card/front-side/stats-card-front.component';
import { EcChartsPanelComponent } from './charts-panel/charts-panel.component';


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
    StatsCardComponent,
    EcChartsPanelComponent,
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
