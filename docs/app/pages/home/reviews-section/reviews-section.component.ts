/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { Review, ReviewsService } from '../../../@core/data/service/reviews.service';

@Component({
  selector: 'ngx-landing-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss'],
})
export class ReviewsSectionComponent implements OnDestroy {

  private alive = true;

  private desktopSwiperConfig: SwiperConfigInterface = {
    slidesPerView: 3,
    keyboard: true,
    navigation: true,
  };

  private tabletSwiperConfig: SwiperConfigInterface = {
    ...this.desktopSwiperConfig,
    slidesPerView: 2,
  };

  private mobileSwiperConfig: SwiperConfigInterface = {
    slidesPerView: 'auto',
    centeredSlides: true,
    keyboard: false,
    navigation: false,
  };

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 24,
    mousewheel: false,
    lazy: true,
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false,
    },
  };

  breakpoints: any;
  reviews: Review[];

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private reviewsService: ReviewsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.changeSwiperConfig(newValue.width);
      });

    this.reviewsService.getReviews()
      .pipe(takeWhile(() => this.alive))
      .subscribe((reviews) => this.reviews = reviews);
  }

  changeSwiperConfig(currentWidth: number): void {
    if (this.isMobile(currentWidth)) {
      this.swiperConfig = {
        ...this.swiperConfig,
        ...this.mobileSwiperConfig,
      };
    } else {
      const desktopOrTabletConfig = this.isTablet(currentWidth) ? this.tabletSwiperConfig : this.desktopSwiperConfig;

      this.swiperConfig = {
        ...this.swiperConfig,
        ...desktopOrTabletConfig,
      };
    }
  }

  private isMobile(currentWidth: number): boolean {
    return currentWidth <= this.breakpoints.is;
  }

  private isTablet(currentWidth: number): boolean {
    return currentWidth <= this.breakpoints.sm;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
