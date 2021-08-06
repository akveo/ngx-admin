import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { InlineSVGModule } from 'ng-inline-svg';

import { BackendIntegrationDiagramComponent } from './diagram/backend-integration-diagram.component';
import { BackendIntegrationComponent } from './backend-integration.component';
import { BackendIntegrationRoutingModule } from './backend-integration-routing.module';
import { IntegrationDescriptionComponent } from './integration-description/integration-description.component';
import { PhpIntegrationDescriptionComponent } from './descriptions/php-integration-description.component';
import {
  DotNetCoreIntegrationDescriptionComponent,
} from './descriptions/dot-net-core-integration-description.component';
import { NodeJsIntegrationDescriptionComponent } from './descriptions/node-js-integration-description.component';
import { JavaIntegrationDescriptionComponent } from './descriptions/java-integration-description.component';
import { EcommerceIntegrationDescriptionComponent } from './descriptions/ecommerce-integration-description.component';

@NgModule({
  imports: [
    RouterModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    InlineSVGModule,
    BackendIntegrationRoutingModule,
  ],
  declarations: [
    BackendIntegrationComponent,
    BackendIntegrationDiagramComponent,
    PhpIntegrationDescriptionComponent,
    DotNetCoreIntegrationDescriptionComponent,
    NodeJsIntegrationDescriptionComponent,
    JavaIntegrationDescriptionComponent,
    EcommerceIntegrationDescriptionComponent,
    IntegrationDescriptionComponent,
  ],
})
export class BackendIntegrationModule { }
