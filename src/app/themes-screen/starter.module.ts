import {NgModule} from '@angular/core';
import {StarterRoutingModule} from './starter-routing.module';
import {NgxStarterComponent} from './starter.component';
import {NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule} from '@nebular/theme';
import {ThemeModule} from '../@theme/theme.module';

const NB_MODULES = [
  NbIconModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
];

@NgModule({
  imports: [
    StarterRoutingModule,
    ...NB_MODULES,
    ThemeModule,
    NbActionsModule,
  ],
  declarations: [
    NgxStarterComponent,
    NgxStarterComponent,
  ],
})
export class StarterModule {
}
