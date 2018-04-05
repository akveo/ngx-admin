import { NgModule } from '@angular/core';
import { EchartsMockDirective } from './ngx-echarts.directives';
import { LoaderModule } from '../loader/loader.module';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  imports: [ LoaderModule ],
  declarations: [ EchartsMockDirective ],
  exports: [ EchartsMockDirective ],
  entryComponents: [ LoaderComponent ],
})
export class NgxEchartsModule {}
