import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ServerExamplesComponent} from './server-examples.component';
import {BasicExampleLoadComponent} from './basic-example-load.component';
import {AdvancedExampleServerComponent} from './advanced-example-server.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    HttpClientModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ServerExamplesComponent,
    BasicExampleLoadComponent,
    AdvancedExampleServerComponent,
  ],
})
export class SampleModule { }
