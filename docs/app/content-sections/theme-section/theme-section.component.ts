/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'ngx-landing-theme-section',
  templateUrl: './theme-section.component.html',
  styleUrls: ['./theme-section.component.scss'],
})
export class ThemeSectionComponent {

  private themes: string[] = [
    'Light',
    'Cosmic',
    'Corporate',
  ];

  sliderIndex: number = 1;
  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 200,
    slidesPerView: 'auto',
    centeredSlides: true,
    keyboard: true,
    navigation: true,

    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows : false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false,
      renderBullet: (index, className) => {
        return `
          <span class="${className}">
            <span>
              ${this.themes[index]}
            </span>
          </span>`;
      },
    },
  };
}
