import { NgModule } from '@angular/core';
import { NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbCheckboxModule,
  NbRadioModule, 
  NbSelectModule,
  NbDatepickerModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { BillingComponent } from './billing.component';
import { BillingService } from './billing.service';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    NbRadioModule,
    NbCheckboxModule,
    Ng2SmartTableModule,
    FormsModule,
    NbSelectModule,
    NbDatepickerModule,
  ],
  declarations: [
    BillingComponent,
    BillingDetailComponent,
  ],
  providers: [
    BillingService,
    BillingDetailComponent,
  ],
  entryComponents: [
    BillingDetailComponent,
  ],
})
export class BillingModule { }