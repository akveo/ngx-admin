import { NgModule } from '@angular/core';

import {
  AdvancedPieComponent,
  AreaStackComponent,
  BarComponent,
  LineComponent,
  PieComponent,
  PolarComponent,
} from './components';

const components = [
  AdvancedPieComponent,
  AreaStackComponent,
  BarComponent,
  LineComponent,
  PieComponent,
  PolarComponent,
];

@NgModule({
  declarations: [ ...components ],
  exports: [ ...components ],
})
export class NgxChartsModule {}
