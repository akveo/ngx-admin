/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AfterViewInit, OnInit, Component, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, filter, take } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

import { Descriptions, DescriptionsService } from '../../../@core/data/service/descriptions.service';
import BUNDLES from './bundles';

@Component({
  selector: 'ngx-backend-bundles-section',
  templateUrl: 'backend-bundles-section.component.html',
  styleUrls: ['./backend-bundles-section.component.scss'],
})
export class BackendBundlesSectionComponent implements AfterViewInit {

  descriptions: Observable<Descriptions[]> = this.descriptionsService.getBundleDescriptions();

  selectedLicenseType = 'personal';

  licenses = [
    { key: 'personal', label: 'Personal' },
    { key: 'commercial', label: 'Commercial' },
  ];

  bundles = [...BUNDLES];

  constructor(private descriptionsService: DescriptionsService,
              private activatedRoute: ActivatedRoute,
              private el: ElementRef<HTMLElement>,
              @Inject(NB_WINDOW) private window) {
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
