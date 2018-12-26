/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy } from '@angular/core';
import { Descriptions, DescriptionsService } from '../../../@core/data/service/descriptions.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-landing-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss'],
})
export class DescriptionSectionComponent implements OnDestroy {

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
