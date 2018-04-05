import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [ LoaderModule ],
  declarations: [ ChartComponent ],
  exports: [ ChartComponent ],
})
export class ChartModule {}
