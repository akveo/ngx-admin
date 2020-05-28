import { NgModule } from '@angular/core';
import { NbCardModule
  , NbIconModule
  , NbInputModule
  , NbTreeGridModule
  , NbButtonModule,
  NbCheckboxModule,
  NbRadioModule, 
  NbSelectModule,
  NbDatepickerModule
 } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { ServiceAgreementComponent } from './sa.component';
import { ServiceAgreementService } from './sa.service';
import { ServiceAgreementDetailComponent } from './service-agreement-detail/service-agreement-detail.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbCheckboxModule,
    NbRadioModule, 
    NbSelectModule,
    NbDatepickerModule,
    FormsModule
  ],
  declarations: [
    ServiceAgreementComponent,
    ServiceAgreementDetailComponent,
  ],
  providers: [
    ServiceAgreementService,
    ServiceAgreementDetailComponent
  ],
  entryComponents: [
    ServiceAgreementDetailComponent,
  ],
})
export class ServiceAgreementModule { }
