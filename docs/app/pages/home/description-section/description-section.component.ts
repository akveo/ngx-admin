/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'ngx-landing-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss'],
})
export class DescriptionSectionComponent {

  // TODO: move to service
  /* tslint:disable:max-line-length */
  descriptions = [
    {
      icon: 'layout-outline',
      title: 'Efficient',
      description: 'Packed with a huge number of handcrafted UI components, charts, maps, editors, tables, and much more, so that developers can focus on business needs',
    },
    {
      icon: 'smartphone-outline',
      title: 'Mobile first',
      description: 'Looks stunning on every screen size and is optimized to bring the large-screen experience from desktop to mobile',
    },
    {
      icon: 'color-palette-outline',
      title: 'Сustomizable',
      description: 'With 3 themes, 2 dashboards, and outstanding UI architecture, it’s easy to change the themes and find the right fit for your company',
    },
    {
      icon: 'heart-outline',
      title: 'Updated and supported',
      description: 'Continuous updates and fixes from the development team to keep your tech up to date. The friendly and active community support team are ready to guide you through your challenges',
    },
  ];
  /* tslint:enable:max-line-length */
}
