/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component} from '@angular/core';

@Component({
  selector: 'ngx-backend-bundles-section',
  templateUrl: 'backend-bundles-section.component.html',
  styleUrls: ['./backend-bundles-section.component.scss'],
})

export class BackendBundlesSectionComponent {

  licenseType = 'commercial';

  firstBundleName = 'E-commerce: .NET';
  secondBundleName = 'IoT: .NET';
  thirdBundleName = 'E-commerce: .NET Core';
  fourthBundleName = 'IoT: .NET Core';

  firstBundleMail: string = 'mailto:support@akveo.com' +
    '?subject=.NET E-commerce Bundle' +
    '&body=Dear Akveo, %0D%0A%0D%0A' +
    'I would like to purchase .NET E-commerce Bundle. ' +
    'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
    'Thanks and regards';

  secondBundleMail: string = 'mailto:support@akveo.com' +
    '?subject=.NET IoT Bundle' +
    '&body=Dear Akveo, %0D%0A%0D%0A' +
    'I would like to purchase .NET IoT Bundle. ' +
    'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
    'Thanks and regards';

  thirdBundleMail: string = 'mailto:support@akveo.com' +
    '?subject=.NET Core E-commerce Bundle' +
    '&body=Dear Akveo, %0D%0A%0D%0A' +
    'I would like to purchase .NET Core E-commerce Bundle. ' +
    'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
    'Thanks and regards';

  fourthBundleMail: string = 'mailto:support@akveo.com' +
    '?subject=.NET Core IoT Bundle' +
    '&body=Dear Akveo, %0D%0A%0D%0A' +
    'I would like to purchase .NET Core IoT Bundle. ' +
    'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
    'Thanks and regards';

  firstCardFlipped: boolean = false;
  secondCardFlipped: boolean = false;
  thirdCardFlipped: boolean = false;
  fourthCardFlipped: boolean = false;

  constructor() {
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  isCommercial() {
    return this.licenseType === 'commercial';
  }
}
