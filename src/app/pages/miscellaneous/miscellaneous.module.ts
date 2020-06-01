import { NgModule, Component, OnInit  } from '@angular/core';
import { NbButtonModule,NbInputModule, NbCardModule,NbSelectModule,NbIconModule, NbComponentShape, NbComponentSize, NbComponentStatus,NbStepperModule } from '@nebular/theme';

import { ThemeModule,} from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbInputModule,
    NbStepperModule,
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
  ],
})
export class MiscellaneousModule { }

export class ButtonsComponent {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
