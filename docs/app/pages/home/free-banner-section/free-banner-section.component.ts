/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-free-banner-section',
  templateUrl: './free-banner-section.component.html',
  styleUrls: ['./free-banner-section.component.scss'],
})
export class FreeBannerSectionComponent {

 @Input() bannerImg: string;
 @Input() url: string;

}
