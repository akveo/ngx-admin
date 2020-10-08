import { Component } from '@angular/core';

@Component({
  selector: 'ngx-python-integration-description',
  template: `
    <ngx-integration-description [features]="features"
                                 [url]="url"
                                 [buttonText]="buttonText"
    ></ngx-integration-description>
  `,
})
export class PythonIntegrationDescriptionComponent {

  buttonText = 'Get Backend From 49$';
  url = 'https://store.akveo.com/collections/python-bundles?utm_campaign=akveo_store%20-%20all%20bundles%20-%20ngx_admin_demo&utm_source=ngx_admin&utm_medium=referral&utm_content=sidebar_link_python';

  features: string[] = [
    'ngx-admin template with 100+ UI components',
    'Python backend with Flask micro-framework',
    'Any SQL database can be used (PostgreSQL, MySQL, Oracle, Microsoft SQL Server, and SQLite)',
    'SQLAlchemy as database toolkit for CRUD operations',
    'Authentication using JWT tokens is implemented and integrated with both client and server side',
    'Compression is set up for better performance',
    'Documentation is included',
    '3 months free updates',
  ];

}
