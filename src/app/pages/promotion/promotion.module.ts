import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule,
  NbCheckboxModule,
  NbRadioModule,
  NbSelectModule,
  NbDatepickerModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PromotionComponent } from './promotion.component';
import { PromotionService } from './promotion.service';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
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
    PromotionComponent,
    PromotionDetailComponent,
  ],
  providers: [
    PromotionService,
    PromotionDetailComponent,
  ],
  entryComponents: [
    PromotionDetailComponent,
  ],
})
export class PromotionModule { }
