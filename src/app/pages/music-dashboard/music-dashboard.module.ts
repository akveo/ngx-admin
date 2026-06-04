import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  NbCardModule, NbButtonModule, NbIconModule, NbSpinnerModule,
  NbListModule, NbBadgeModule, NbProgressBarModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { MusicDashboardComponent } from './music-dashboard.component';

const routes: Routes = [
  { path: '', component: MusicDashboardComponent },
];

@NgModule({
  declarations: [MusicDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbSpinnerModule,
    NbListModule,
    NbBadgeModule,
    NbProgressBarModule,
  ],
})
export class MusicDashboardModule {}
