import { NgModule } from '@angular/core';

import {
  AdvancedPieComponent,
  AreaStackComponent,
  BarComponent,
  LineComponent,
  PieComponent,
  PolarComponent,
} from './components';
import { LoaderModule } from '../loader/loader.module';

const components = [
  AdvancedPieComponent,
  AreaStackComponent,
  BarComponent,
  LineComponent,
  PieComponent,
  PolarComponent,
];

@NgModule({
  imports: [ LoaderModule ],
  declarations: [ ...components ],
  exports: [ ...components ],
})
export class NgxChartsModule {}
