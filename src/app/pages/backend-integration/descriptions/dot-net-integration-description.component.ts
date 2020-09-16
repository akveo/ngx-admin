import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dot-net-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class DotNetIntegrationDescriptionComponent {

  buttonText: string = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/net-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_dotnet';

  features: string[] = [
    'Backend layered architecture, authentication, solution structure',
    'Ngx-admin angular UI with 100+ UI components to use',
    'Authentication using JWT tokens is implemented and integrated with both client and server side',
    'Basic role management and ACL is in place',
    'Swagger included for automatic API testing and documentation',
    'Serilog is used for logging',
    'OWIN startup is configured',
    'Documentation is included',
    '3 months free updates',
  ];

}
