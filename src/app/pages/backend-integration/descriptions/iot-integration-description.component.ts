import { Component } from '@angular/core';

@Component({
  selector: 'ngx-iot-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class IotIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/iot-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_iot';

  features: string[] = [
    'IOT dashboard components integrated with backend',
    'Sample devices table and device details page integrated with backend',
  ];

}
