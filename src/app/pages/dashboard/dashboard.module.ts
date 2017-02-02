import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

import { CalendarComponent } from './calendar';
import { FeedComponent } from './feed';
import { LineChartComponent } from './line-chart';
import { PieChartComponent } from './pie-chart';
import { PopularAppComponent } from './popular-app';
import { TodoComponent } from './todo';
import { TrafficChartComponent } from './traffic-chart';
import { UsersMapComponent } from './users-map';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './line-chart/line-chart.service';
import { PieChartService } from './pie-chart/pie-chart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './traffic-chart/traffic-chart.service';
import { UsersMapService } from './users-map/users-map.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    DashboardComponent,
    CalendarComponent,
    FeedComponent,
    LineChartComponent,
    PieChartComponent,
    PopularAppComponent,
    TodoComponent,
    TrafficChartComponent,
    UsersMapComponent,
  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService
  ]
})
export class DashboardModule { }
