import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSpinnerModule } from '@nebular/theme';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
  imports: [
    CommonModule,
    NbSpinnerModule,
  ],
  declarations: [CustomTableComponent],
  exports: [CustomTableComponent],
})
export class SharedModule { }
