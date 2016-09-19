import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { MeSimpleChartComponent } from './me-simple-chart.component'


@NgModule({
  imports: [CommonModule, NgaModule, FormsModule],
  declarations: [MeSimpleChartComponent],
  exports: [MeSimpleChartComponent]
})
export class MeSimpleChartModule {
}
