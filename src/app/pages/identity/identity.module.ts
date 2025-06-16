import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  NbCardModule, 
  NbButtonModule, 
  NbInputModule, 
  NbSelectModule, 
  NbSpinnerModule, 
  NbProgressBarModule,
  NbIconModule,
  NbListModule
} from '@nebular/theme';
import { ManualLookupComponent } from './manual-lookup/manual-lookup.component';
import { ResultsHistoryComponent } from './results-history/results-history.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'manual-lookup',
        component: ManualLookupComponent,
      },
      {
        path: 'results-history',
        component: ResultsHistoryComponent,
      },
    ]),
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbIconModule,
    NbListModule
  ],
  declarations: [
    ManualLookupComponent,
    ResultsHistoryComponent,
  ],
})
export class IdentityModule { }