import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
  ],
})
export class MiscellaneousModule { }