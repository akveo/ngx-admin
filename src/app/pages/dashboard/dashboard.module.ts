import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbProgressBarModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';

// IdentityPulse components
import { MetricCardComponent } from './metric-card/metric-card.component';
import { CountryCoverageComponent } from './country-coverage/country-coverage.component';
import { ClientShowcaseComponent } from './client-showcase/client-showcase.component';
import { DataCentersMapComponent } from './data-centers-map/data-centers-map.component';
import { RecentVerificationsComponent } from './recent-verifications/recent-verifications.component';
import { PricingRegionsComponent } from './pricing-regions/pricing-regions.component';
import { ComplianceSummaryComponent } from './compliance-summary/compliance-summary.component';
import { DifferentiatorsComponent } from './differentiators/differentiators.component';

// Note: ECharts is already available globally through ngx-echarts
// The world map is registered by ngx-admin's theme module

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbProgressBarModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    // IdentityPulse components
    MetricCardComponent,
    CountryCoverageComponent,
    ClientShowcaseComponent,
    DataCentersMapComponent,
    RecentVerificationsComponent,
    PricingRegionsComponent,
    ComplianceSummaryComponent,
    DifferentiatorsComponent,
  ],
})
export class DashboardModule { }