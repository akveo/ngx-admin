import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';

import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';
import { IconsComponent } from './icons/icons.component';
import { FlatButtonsComponent } from './buttons/flat/flat.component';
import { RaisedButtonsComponent } from './buttons/raised/raised.component';
import { SizedButtonsComponent } from './buttons/sized/sized.component';
import { DisabledButtonsComponent } from './buttons/disabled/disabled.component';
import { IconButtonsComponent } from './buttons/icon/icon.component';
import { DropdownButtonsComponent } from './buttons/dropdown/dropdown.component';
import { GroupButtonsComponent } from './buttons/group/group.component';
import { LargeButtonsComponent } from './buttons/large/large.component';
import { ModalComponent } from './modals/modal/modal.component';

const COMPONENTS = [
  UiFeaturesComponent,
  ButtonsComponent,
  GridComponent,
  ModalsComponent,
  IconsComponent,
  FlatButtonsComponent,
  RaisedButtonsComponent,
  SizedButtonsComponent,
  DisabledButtonsComponent,
  IconButtonsComponent,
  DropdownButtonsComponent,
  GroupButtonsComponent,
  LargeButtonsComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    SharedModule,
    UiFeaturesRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class UiFeaturesModule { }
