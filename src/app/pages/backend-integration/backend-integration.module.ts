import {ThemeModule} from '../../@theme/theme.module';
import {NgModule} from '@angular/core';
import {BackendIntegrationDiagramComponent} from './diagram/backend-integration-diagram.component';
import {BackendIntegrationComponent} from './backend-integration.component';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbCardModule, NbIconModule} from '@nebular/theme';
import {BackendIntegrationRoutingModule} from './backend-integration-routing.module';
import {IntegrationDescriptionComponent} from './integration-description/integration-description.component';
import {PhpIntegrationDescriptionComponent} from './descriptions/php-integration-description.component';
import {DotNetIntegrationDescriptionComponent} from './descriptions/dot-net-integration-description.component';
import {DotNetCoreIntegrationDescriptionComponent} from './descriptions/dot-net-core-integration-description.component';
import {NodeJsIntegrationDescriptionComponent} from './descriptions/node-js-integration-description.component';
import { JavaIntegrationDescriptionComponent } from './descriptions/java-integration-description.component';
import { PythonIntegrationDescriptionComponent } from './descriptions/python-integration-description.component';
import { EcommerceIntegrationDescriptionComponent } from './descriptions/ecommerce-integration-description.component';
import { IotIntegrationDescriptionComponent } from './descriptions/iot-integration-description.component';
import {InlineSVGModule} from 'ng-inline-svg';

@NgModule({
  imports: [
    ThemeModule,
    RouterModule,
    NbCardModule,
    BackendIntegrationRoutingModule,
    NbIconModule,
    NbButtonModule,
    InlineSVGModule,
  ],
  declarations: [
    BackendIntegrationComponent,
    BackendIntegrationDiagramComponent,
    PhpIntegrationDescriptionComponent,
    DotNetIntegrationDescriptionComponent,
    DotNetCoreIntegrationDescriptionComponent,
    NodeJsIntegrationDescriptionComponent,
    JavaIntegrationDescriptionComponent,
    PythonIntegrationDescriptionComponent,
    EcommerceIntegrationDescriptionComponent,
    IotIntegrationDescriptionComponent,
    IntegrationDescriptionComponent,
  ],
})
export class BackendIntegrationModule { }
