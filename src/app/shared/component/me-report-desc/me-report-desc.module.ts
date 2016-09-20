import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { MeReportDescComponent } from './me-report-desc.component';


@NgModule({
  imports: [CommonModule, NgaModule, FormsModule],
  declarations: [MeReportDescComponent],
  exports: [MeReportDescComponent]
})
export class MeReportDescModule {
}
