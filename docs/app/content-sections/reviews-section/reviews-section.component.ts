/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'ngx-landing-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss'],
})
export class ReviewsSectionComponent {

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 24,
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false,
    },
  };
}
