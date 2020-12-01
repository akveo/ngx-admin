import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDashBoardRoutingModule } from './new-dash-board-routing.module';
import { DashPgComponent } from './dash-pg/dash-pg.component';


@NgModule({
  declarations: [DashPgComponent],
  imports: [
    CommonModule,
    NewDashBoardRoutingModule
  ]
})
export class NewDashBoardModule { }
