import { Component } from '@angular/core';

@Component({
  selector: 'ngx-e-commerce-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class EcommerceIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/e-commerce-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_e-commerce';

  features: string[] = [
    'E-commerce dashboard components integrated with backend',
    'Sample order table and order details page integrated with backend',
  ];

}
