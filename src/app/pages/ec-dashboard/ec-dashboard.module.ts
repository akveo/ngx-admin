import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EcDashboardComponent } from './ec-dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { ChartsPanelComponent } from './charts-panel/charts-panel.component';
import { ChartModule } from 'angular2-chartjs';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
  ],
  declarations: [
    EcDashboardComponent,
    StatsCardComponent,
    ChartsPanelComponent,
  ],
})
export class EcDashboardModule { }
