import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { ModalsComponent } from './modals/modals.component';
import { ModalComponent } from './modals/modal/modal.component';
import { BootstrapComponent } from './bootstrap.component';
import { ButtonsModule } from './buttons/buttons.module';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

const COMPONENTS = [
  BootstrapComponent,
  ModalsComponent,
  ModalComponent,
  FormInputsComponent,
];

const ENTRY_COMPONENTS = [
  ModalComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    BootstrapRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class BootstrapModule { }
