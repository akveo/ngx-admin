import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';

export class Bundle {
  type: string;
  title: string;
  description: string;
  licenses: object;
  imageModifier: string;
  emailName: string;
}

export const BUNDLE_LICENSE = {
  personal: 'personal',
  commercial: 'commercial',
};

@Injectable()
export class BundlesService {

  /* tslint:disable:max-line-length */
  private bundles: Bundle[] = [
    {
      type: 'E-Commerce:',
      title: '.NET + ngx-admin',
      description: 'E-Commerce Dashboard integrated with REST data services based on .NET Framework, Web API and Entity Framework 6.2 ',
      licenses: {
        personal: {
          oldPrice: '200',
          newPrice: '150',
          emailLink: '',
        },
        commercial: {
          oldPrice: '2000',
          newPrice: '1500',
          emailLink: '',
        },
      },
      imageModifier: 'dot-net',
      emailName: '.NET E-commerce',
    },
    {
      type: 'IoT:',
      title: '.NET + ngx-admin',
      description: 'IoT Dashboard integrated with REST data services based on .NET Framework, Web API and Entity Framework 6.2',
      licenses: {
        personal: {
          oldPrice: '200',
          newPrice: '150',
          emailLink: '',
        },
        commercial: {
          oldPrice: '2000',
          newPrice: '1500',
          emailLink: '',
        },
      },
      imageModifier: 'dot-net',
      emailName: '.NET IoT',
    },
    {
      type: 'E-Commerce:',
      title: '.NET Core + ngx-admin',
      description: 'E-Commerce Dashboard integrated with REST data services based on .NET Core, Web API and Entity Framework 2.2',
      licenses: {
        personal: {
          oldPrice: '180',
          newPrice: '140',
          emailLink: '',
        },
        commercial: {
          oldPrice: '1800',
          newPrice: '1400',
          emailLink: '',
        },
      },
      imageModifier: 'dot-net-core',
      emailName: '.NET Core E-commerce',
    },
    {
      type: 'IoT:',
      title: '.NET Core + ngx-admin',
      description: 'IoT Dashboard integrated with REST data services based on .NET Core, Web API and Entity Framework 2.2',
      licenses: {
        personal: {
          oldPrice: '180',
          newPrice: '140',
          emailLink: '',
        },
        commercial: {
          oldPrice: '1800',
          newPrice: '1400',
          emailLink: '',
        },
      },
      imageModifier: 'dot-net-core',
      emailName: '.NET Core IoT',
    },
  ];

  /* tslint:disable:max-line-length */

  constructor() {
    this.bundles.forEach((bundle) => {
      Object.entries(bundle.licenses).forEach(([key, license]) => {
        license.emailLink = this.getMailToText(bundle.emailName, key);
      });
    });
  }

  private getMailToText(bundleName: string, licenseName: string) {
    return 'mailto:support@akveo.com' +
      `?subject=${licenseName} ${bundleName} Bundle` +
      '&body=Dear Akveo, %0D%0A%0D%0A' +
      `I would like to purchase ${licenseName} ${bundleName} Bundle. ` +
      'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
      'Thanks and regards';
  }

  getBundles(): Observable<Bundle[]> {
    return observableOf(this.bundles);
  }
}
