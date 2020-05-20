import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbCheckboxModule,
  NbRadioModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PartnerPriceComponent } from './partner-price.component';
import { PartnerPriceService } from './partner-price.service';
import { PartnerPriceDetailComponent } from './partner-price-detail/partner-price-detail.component';
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
  ],
  declarations: [
    PartnerPriceComponent,
    PartnerPriceDetailComponent,
  ],
  providers: [
    PartnerPriceService,
    PartnerPriceDetailComponent,
  ],
  entryComponents: [
    PartnerPriceDetailComponent,
  ],
})
export class PromotionModule { }
