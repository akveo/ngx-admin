import { Component } from '@angular/core';

@Component({
  selector: 'ngx-java-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class JavaIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/java-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_java';

  features: string[] = [
    'Ngx-admin template with 100+ UI components',
    'Spring Boot as the main framework for backend',
    'Maven as building tool',
    'Can be used with a range of SQL databases. In-Memory database H2 by default',
    'Authentication using Json Web Tokens is implemented and integrated with both client and server side',
    'Refresh Token functionality is available out of the box',
    `TSLint as part of Angular project settings, it simply wouldn't let you push typescript code with errors`,
    'Backend has Checkstyle setup and findbugs plugin for static code analysis',
    'Swagger for API documentation purpose',
    'Documentation is included',
    '3 months free updates',
  ];

}
