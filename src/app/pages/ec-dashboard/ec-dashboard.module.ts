import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EcDashboardComponent } from './ec-dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { OrdersChartComponent } from './charts-panel/orders/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/profit/profit-chart.component';
import { ChartModule } from 'angular2-chartjs';
import {StatsCardBackComponent} from './stats-card/back-side/stats-card-back.component';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
  ],
  declarations: [
    EcDashboardComponent,
    StatsCardComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
  ],
})
export class EcDashboardModule { }
