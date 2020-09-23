import { Component } from '@angular/core';

@Component({
  selector: 'ngx-node-js-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class NodeJsIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/nodejs-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_nodejs';

  features: string[] = [
    'MongoDB for user data storage',
    'Express server',
    'Authentication using Passport and JWT tokens is implemented and integrated with both client and server side',
    'Eslint for code quality on the backend side',
    'Winston is used for logging',
    'Node-config is used for API settings',
    'Nodemon is used for better development experience',
    'Documentation is included',
    'Basic role management and ACL is in place',
    'Swagger included for automatic API testing and documentation',
    '3 months free updates',
  ];

}
