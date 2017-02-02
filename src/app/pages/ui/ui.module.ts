import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './ui.routing';
import { UiComponent } from './ui.component';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridComponent } from './components/grid/grid.component';
import { IconsComponent } from './components/icons/icons.component';
import { ModalsComponent } from './components/modals/modals.component';
import { TypographyComponent } from './components/typography/typography.component';

import { DisabledButtonsComponent } from './components/buttons/components/disabled-buttons';
import { DropdownButtonsComponent } from './components/buttons/components/dropdown-buttons';
import { FlatButtonsComponent } from './components/buttons/components/flat-buttons';
import { GroupButtonsComponent } from './components/buttons/components/group-buttons';
import { IconButtonsComponent } from './components/buttons/components/icon-buttons';
import { IconsService } from './components/icons/icons.service';
import { LargeButtonsComponent } from './components/buttons/components/large-buttons';
import { RaisedButtonsComponent } from './components/buttons/components/raised-buttons';
import { SizedButtonsComponent } from './components/buttons/components/sized-buttons';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    routing
  ],
  declarations: [
    UiComponent,
    ButtonsComponent,
    GridComponent,
    IconsComponent,
    ModalsComponent,
    TypographyComponent,
    DisabledButtonsComponent,
    DropdownButtonsComponent,
    FlatButtonsComponent,
    GroupButtonsComponent,
    IconButtonsComponent,
    LargeButtonsComponent,
    RaisedButtonsComponent,
    SizedButtonsComponent
  ],
  providers: [
    IconsService
  ]
})
export class UiModule { }
