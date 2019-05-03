import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class Bundle {
  type: string;
  title: string;
  description: string;
  licenses: object;
  imageModifier: string;
}

export class Feature {
  text: string;
  availableInPersonalLicence: boolean;
  availableInCommercialLicence: boolean;
}

export const BUNDLE_LICENSE = {
  single: 'single',
  multi: 'multi',
};

@Injectable()
export class BundlesService {

  /* tslint:disable:max-line-length */
  private bundles: Bundle[] = [
    {
      type: 'Starter',
      title: 'Node.JS + ngx-admin',
      description: 'Starter Dashboard integrated with REST data services based Express REST API, MongoDB',
      licenses: {
        single: {
          oldPrice: '39',
          newPrice: '29',
          buyLink: 'https://store.akveo.com/collections/all/products/nodejs-mongodb-ngx-admin-angular-starter-bundle',
        },
        multi: {
          oldPrice: '150',
          newPrice: '125',
          buyLink: 'https://store.akveo.com/collections/all/products/nodejs-mongodb-ngx-admin-angular-starter-bundle?variant=15070372560945',
        },
      },
      imageModifier: 'node-js',
    },
    {
      type: 'Starter:',
      title: '.NET Core + ngx-admin',
      description: 'E-Commerce Dashboard integrated with REST data services based on .NET Core, Web API and Entity Framework 2.2',
      licenses: {
        single: {
          oldPrice: '39',
          newPrice: '129',
          buyLink: 'https://store.akveo.com/collections/all/products/net-core-ngx-admin-angular-starter-bundle',
        },
        multi: {
          oldPrice: '150',
          newPrice: '125',
          buyLink: 'https://store.akveo.com/collections/all/products/net-core-ngx-admin-angular-starter-bundle?variant=14607219753009',
        },
      },
      imageModifier: 'dot-net-core',
    },
    {
      type: 'Full E-commerce Bundle',
      title: '.NET Core + ngx-admin',
      description: 'E-commerce Dashboard integrated with REST data services based on .NET Core, Web API and Entity Framework 6.2',
      licenses: {
        single: {
          oldPrice: '180',
          newPrice: '140',
          buyLink: 'https://store.akveo.com/collections/all/products/e-commerce-net-core-ngx-admin',
        },
        multi: {
          oldPrice: '1800',
          newPrice: '1400',
          buyLink: 'https://store.akveo.com/collections/all/products/e-commerce-net-core-ngx-admin?variant=14434658779185',
        },
      },
      imageModifier: 'dot-net',
    },
    {
      type: 'Full IoT Bundle',
      title: '.NET Framework + ngx-admin',
      description: 'IoT Dashboard integrated with REST data services based on .NET Core, Web API and Entity Framework 2.2',
      licenses: {
        single: {
          oldPrice: '180',
          newPrice: '140',
          buyLink: 'https://store.akveo.com/collections/all/products/iot-net-ngx-admin',
        },
        multi: {
          oldPrice: '1800',
          newPrice: '1400',
          buyLink: 'https://store.akveo.com/collections/all/products/iot-net-ngx-admin?variant=14434651471921',
        },
      },
      imageModifier: 'dot-net-core',
    },
  ];

  private features: Feature[] = [
    {
      text: 'ngx-admin template with 100+ UI components integrated with Backend Services',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Backend Services and Repository layers with data access',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'JWT Authentication setup for UI and Backend',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Running instructions and code documentation',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Single app',
      availableInPersonalLicence: true,
      availableInCommercialLicence: true,
    },
    {
      text: 'Multi app',
      availableInPersonalLicence: false,
      availableInCommercialLicence: true,
    },
    {
      text: '6 months support and bug fixes on request',
      availableInPersonalLicence: false,
      availableInCommercialLicence: true,
    },
  ];
  /* tslint:disable:max-line-length */

  getBundles(): Observable<Bundle[]> {
    return observableOf(this.bundles);
  }

  getFeatures(): Observable<Feature[]> {
    return observableOf(this.features);
  }
}
