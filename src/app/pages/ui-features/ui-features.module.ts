import { NgModule } from '@angular/core';

import { NgxSharedModule } from '../../@shared/shared.module';

import { NgxUiFeaturesRoutingModule } from './ui-features-routing.module';
import { NgxUiFeaturesComponent } from './ui-features.component';
import { NgxButtonsComponent } from './buttons/buttons.component';
import { NgxGridComponent } from './grid/grid.component';
import { NgxModalsComponent } from './modals/modals.component';
import { NgxIconsComponent } from './icons/icons.component';
import { NgxFlatButtonsComponent } from './buttons/flat/flat.component';
import { NgxRaisedButtonsComponent } from './buttons/raised/raised.component';
import { NgxSizedButtonsComponent } from './buttons/sized/sized.component';
import { NgxDisabledButtonsComponent } from './buttons/disabled/disabled.component';
import { NgxIconButtonsComponent } from './buttons/icon/icon.component';
import { NgxDropdownButtonsComponent } from './buttons/dropdown/dropdown.component';
import { NgxGroupButtonsComponent } from './buttons/group/group.component';
import { NgxLargeButtonsComponent } from './buttons/large/large.component';
import { NgxModalComponent } from './modals/modal/modal.component';

export const NGX_UI_FEATURES_COMPONENTS = [
  NgxUiFeaturesComponent,
  NgxButtonsComponent,
  NgxGridComponent,
  NgxIconsComponent,
  NgxModalsComponent,
  NgxFlatButtonsComponent,
  NgxRaisedButtonsComponent,
  NgxSizedButtonsComponent,
  NgxDisabledButtonsComponent,
  NgxIconButtonsComponent,
  NgxDropdownButtonsComponent,
  NgxLargeButtonsComponent,
  NgxGroupButtonsComponent,
  NgxModalComponent,
];

@NgModule({
  imports: [
    NgxSharedModule,
    NgxUiFeaturesRoutingModule,
  ],
  declarations: [
    ...NGX_UI_FEATURES_COMPONENTS,
  ],
  entryComponents: [
    NgxModalComponent,
  ],
})
export class NgxUiFeaturesModule { }
