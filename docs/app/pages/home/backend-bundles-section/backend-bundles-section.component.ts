/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, filter, take } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

import { Descriptions, DescriptionsService } from '../../../@core/data/service/descriptions.service';

@Component({
  selector: 'ngx-backend-bundles-section',
  templateUrl: 'backend-bundles-section.component.html',
  styleUrls: ['./backend-bundles-section.component.scss'],
})
export class BackendBundlesSectionComponent implements AfterViewInit {

  descriptions: Observable<Descriptions[]> = this.descriptionsService.getBundleDescriptions();

  selectedLicenseType = 'Personal';
  personalLicense = 'Personal';
  commercialLicense = 'Commercial';

  ecomName = 'E-Commerce:';
  iotName = 'IoT:';

  netName = '.NET + ngx-admin';
  netCoreName = '.NET Core + ngx-admin';

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

  constructor(private descriptionsService: DescriptionsService,
              private activatedRoute: ActivatedRoute,
              private el: ElementRef<HTMLElement>,
              @Inject(NB_WINDOW) private window) {
  }

  isCommercial() {
    return this.selectedLicenseType === 'Commercial';
  }

  ngAfterViewInit() {
    this.activatedRoute.fragment
      .pipe(
        filter(fragment => fragment === 'backend-bundles'),
        delay(500),
        take(1),
      )
      .subscribe((fragment: string) => {
        this.window.scrollTo(0, this.el.nativeElement.offsetTop);
      });
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
