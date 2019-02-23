import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';

import {
  ECommerceVisitorsAnalyticsComponent,
} from './visitors-analytics/visitors-analytics.component';

import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { SlideOutComponent } from './slide-out/slide-out.component';
import {
	ECommerceVisitorsStatisticsComponent,
  } from './visitors-analytics/visitors-statistics/visitors-statistics.component';
  
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
	ECommerceVisitorsAnalyticsComponent,
	ECommerceLegendChartComponent,
	ECommerceVisitorsAnalyticsChartComponent,
	SlideOutComponent,
	ECommerceVisitorsStatisticsComponent,
  ],
  exports: [
	ECommerceVisitorsAnalyticsComponent,
	ECommerceLegendChartComponent,
	ECommerceVisitorsAnalyticsChartComponent,
	SlideOutComponent,
	ECommerceVisitorsStatisticsComponent,
  ],
  providers: [
  ],
})
export class EComSharedModule { }
