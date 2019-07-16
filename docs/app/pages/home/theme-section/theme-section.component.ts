/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { takeWhile } from 'rxjs/operators';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbThemeService,
} from '@nebular/theme';

@Component({
  selector: 'ngx-landing-theme-section',
  templateUrl: './theme-section.component.html',
  styleUrls: ['./theme-section.component.scss'],
})
export class ThemeSectionComponent implements OnDestroy {

  private alive = true;
  private themes: string[] = [
    'Light',
    'Dark',
    'Cosmic',
    'Corporate',
  ];

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  sliderIndex: number = 1;
  initialSwiperConfig: SwiperConfigInterface = {
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
  swiperConfig: SwiperConfigInterface  = {
    ...this.initialSwiperConfig,
  };

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;

        this.changeSwiperConfig();
      });
  }

  changeSwiperConfig(): void {
    if (this.isMobile) {
      this.swiperConfig = {
        ...this.swiperConfig,
        preloadImages: false,
        lazy: true,
      };
    } else {
      this.swiperConfig = this.initialSwiperConfig;
    }
  }

  get isMobile(): boolean {
    return this.breakpoint.width <= this.breakpoints.sm;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
