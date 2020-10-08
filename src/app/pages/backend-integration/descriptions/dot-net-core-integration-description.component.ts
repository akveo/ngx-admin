import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dot-net-core-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class DotNetCoreIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/net-core-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_dotnetcore';

  features: string[] = [
    'Backend layered architecture, authentication, solution structure',
    'Ngx-admin template with 100+ UI components',
    'Authentication using JWT tokens is implemented and integrated into both client and server side',
    'Basic role management and ACL is in place',
    'Data entities classes, independent of any ORM',
    'Dependency injection takes care of services and repositories instantiation',
    'Swagger included for automatic API testing and documentation',
    'Serilog is used for logging',
    'OWIN startup is configured',
    'Documentation is included',
    '3 months free updates',
  ];

}
