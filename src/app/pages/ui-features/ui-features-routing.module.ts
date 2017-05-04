import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxUiFeaturesComponent } from './ui-features.component';
import { NgxButtonsComponent } from './buttons/buttons.component';
import { NgxGridComponent } from './grid/grid.component';
import { NgxIconsComponent } from './icons/icons.component';
import { NgxModalsComponent } from './modals/modals.component';
import { NgxFlatButtonsComponent } from './buttons/flat/flat.component';
import { NgxRaisedButtonsComponent } from './buttons/raised/raised.component';
import { NgxSizedButtonsComponent } from './buttons/sized/sized.component';
import { NgxDisabledButtonsComponent } from './buttons/disabled/disabled.component';
import { NgxIconButtonsComponent } from './buttons/icon/icon.component';
import { NgxDropdownButtonsComponent } from './buttons/dropdown/dropdown.component';
import { NgxLargeButtonsComponent } from './buttons/large/large.component';
import { NgxGroupButtonsComponent } from './buttons/group/group.component';

const routes: Routes = [
  {
    path: '',
    component: NgxUiFeaturesComponent,
    children: [{
      path: 'buttons',
      component: NgxButtonsComponent,
    }, {
      path: 'grid',
      component: NgxGridComponent,
    }, {
      path: 'icons',
      component: NgxIconsComponent,
    }, {
      path: 'modals',
      component: NgxModalsComponent,
    }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxUiFeaturesRoutingModule { }
