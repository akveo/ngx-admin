import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PromotionComponent } from './promotion.component';
import { PromotionService } from './promotion.service';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PromotionComponent,
    PromotionDetailComponent,
  ],
  providers: [
    PromotionService,
  ],
  entryComponents: [
    PromotionDetailComponent,
  ],
})
export class PromotionModule { }
