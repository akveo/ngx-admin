import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './ui.routing';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ui } from './ui.component';
import { Buttons } from './components/buttons/buttons.component';
import { Grid } from './components/grid/grid.component';
import { Icons } from './components/icons/icons.component';
import { Typography } from './components/typography/typography.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    DropdownModule,
    routing
  ],
  declarations: [
    Buttons,
    Grid,
    Icons,
    Typography,
    Ui
  ]
})
export default class UiModule {}
