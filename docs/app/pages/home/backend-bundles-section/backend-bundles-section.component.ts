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

  licenseType = 'Personal';

  firstBundleName = '.NET + ngx-admin E-commerce';
  secondBundleName = '.NET + ngx-admin IoT';
  thirdBundleName = '.NET Core + ngx-admin E-commerce';
  fourthBundleName = '.NET Core + ngx-admin IoT';

  get firstBundleMail(): string {
    return this.getMailToText('.NET E-commerce');
  }

  get secondBundleMail(): string {
    return this.getMailToText('.NET IoT');
  }

  get thirdBundleMail(): string {
    return this.getMailToText('.NET Core E-commerce');
  }

  get fourthBundleMail(): string {
    return this.getMailToText('.NET Core IoT');
  }

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
    return this.licenseType === 'Commercial';
  }

  private getMailToText(bundleName: string) {
    return 'mailto:support@akveo.com' +
      `?subject=${this.licenseType} ${bundleName} Bundle` +
      '&body=Dear Akveo, %0D%0A%0D%0A' +
      `I would like to purchase ${this.licenseType} ${bundleName} Bundle. ` +
      'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
      'Thanks and regards';
  }
}
