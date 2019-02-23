import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartModule } from 'angular2-chartjs';

import { EComSharedModule } from './ecom.shared.module';

import { ThemeModule } from '../../@theme/theme.module';
import { EComOneComponent } from './ecomone.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
	NgxChartsModule,
	EComSharedModule
  ],
  declarations: [
    EComOneComponent
  ],
  providers: [
  ],
})
export class EComOneModule { }
