import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendIntegrationComponent } from './backend-integration.component';
import { PhpIntegrationDescriptionComponent } from './descriptions/php-integration-description.component';
import { DotNetCoreIntegrationDescriptionComponent } from './descriptions/dot-net-core-integration-description.component';
import { NodeJsIntegrationDescriptionComponent } from './descriptions/node-js-integration-description.component';
import { JavaIntegrationDescriptionComponent } from './descriptions/java-integration-description.component';
import { EcommerceIntegrationDescriptionComponent } from './descriptions/ecommerce-integration-description.component';

const routes: Routes = [{
  path: '',
  component: BackendIntegrationComponent,
  children: [
    {
      path: 'php',
      component: PhpIntegrationDescriptionComponent,
    },
    {
      path: 'dot-net-core',
      component: DotNetCoreIntegrationDescriptionComponent,
    },
    {
      path: 'node-js',
      component: NodeJsIntegrationDescriptionComponent,
    },
    {
      path: 'java',
      component: JavaIntegrationDescriptionComponent,
    },
    {
      path: 'ecommerce',
      component: EcommerceIntegrationDescriptionComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendIntegrationRoutingModule { }
