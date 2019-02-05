/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy } from '@angular/core';
import { Descriptions, DescriptionsService } from '../../../@core/data/service/descriptions.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-backend-bundles-section',
  templateUrl: 'backend-bundles-section.component.html',
  styleUrls: ['./backend-bundles-section.component.scss'],
})

export class BackendBundlesSectionComponent implements OnDestroy {

  private alive = true;
  descriptions: Descriptions[];

  ngOnDestroy() {
    this.alive = false;
  }

  selectedLicenseType = 'Personal';
  personalLicense = 'Personal';
  commercialLicense = 'Commercial';

  ecomName = 'E-Commerce:';
  iotName = 'IoT:';

  netName = '.NET + NGX Admin';
  netCoreName = '.NET Core + NGX Admin';


  constructor(private descriptionsService: DescriptionsService) {
    this.descriptionsService.getBundleDescriptions()
      .pipe(takeWhile(() => this.alive))
      .subscribe((descriptions) => this.descriptions = descriptions);
  }

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

  stopPropagation(e) {
    e.stopPropagation();
  }

  isCommercial() {
    return this.selectedLicenseType === 'Commercial';
  }

  private getMailToText(bundleName: string) {
    return 'mailto:support@akveo.com' +
      `?subject=${this.selectedLicenseType} ${bundleName} Bundle` +
      '&body=Dear Akveo, %0D%0A%0D%0A' +
      `I would like to purchase ${this.selectedLicenseType} ${bundleName} Bundle. ` +
      'Please give me details how I can proceed with that. %0D%0A%0D%0A' +
      'Thanks and regards';
  }
}
