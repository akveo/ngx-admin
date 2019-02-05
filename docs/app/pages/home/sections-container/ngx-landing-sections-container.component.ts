/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy } from '@angular/core';
import { Descriptions, DescriptionsService } from '../../../@core/data/service/descriptions.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-landing-sections-container',
  templateUrl: './ngx-landing-sections-container.component.html',
  styleUrls: ['./ngx-landing-sections-container.component.scss'],
})
export class NgxLandingSectionsContainerComponent implements OnDestroy {

  private alive = true;
  descriptions: Descriptions[];

  constructor(private descriptionsService: DescriptionsService) {
    this.descriptionsService.getDescriptions()
      .pipe(takeWhile(() => this.alive))
      .subscribe((descriptions) => this.descriptions = descriptions);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
