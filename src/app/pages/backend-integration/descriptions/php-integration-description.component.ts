import { Component } from '@angular/core';

@Component({
  selector: 'ngx-php-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class PhpIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/products/material-php-starter-bundle?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin%20&utm_medium=referral%20&utm_content=sidebar_link_php';

  features: string[] = [
    'Ngx-admin template with 100+ UI Nebular and Eva design components',
    'Authentication using JWT tokens is implemented and integrated into both client and server-side',
    'Basic role management and ACL is in place, AUTH, reset the password',
    'Backend solution layered architecture and projects segregation',
    'Swagger included for automatic API testing and documentation',
    'Documentation is included',
    'Docker and docker-compose configuration included',
    'MySQL database',
    '3 months free updates',
  ];

}
