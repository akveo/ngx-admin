import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbCheckboxModule,
  NbRadioModule,
  NbSelectModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PartnerPriceComponent } from './partner-price.component';
import { PartnerPriceService } from './partner-price.service';
import { PartnerPriceDetailComponent } from './partner-price-detail/partner-price-detail.component';
import { FormsModule } from '@angular/forms';
import { PartnerPriceNewComponent } from './partner-price-new/partner-price-new.component';

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
  ],
  declarations: [
    PartnerPriceComponent,
    PartnerPriceDetailComponent,
    PartnerPriceNewComponent,
  ],
  providers: [
    PartnerPriceService,
    PartnerPriceDetailComponent,
    PartnerPriceNewComponent,
  ],
  entryComponents: [
    PartnerPriceDetailComponent,
    PartnerPriceNewComponent,
  ],
})
export class PromotionModule { }
