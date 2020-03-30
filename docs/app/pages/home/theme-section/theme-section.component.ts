/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
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
  private forMaterialTheme: boolean = false;
  private themes: string[] = [
    'Material\nLight',
    'Material\nDark',
    'Eva\nLight',
    'Eva\nDark',
    'Cosmic',
    'Corporate',
  ];

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  sliderIndex: number = 1;
  initialSwiperConfig: SwiperConfigInterface = {
    initialSlide: 1,
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
            <span>${this.themes[index]}</span>
          </span>`;
      },
    },
  };
  swiperConfig: SwiperConfigInterface  = {
    ...this.initialSwiperConfig,
  };

  @Input() public set material(value: any) {
    this.forMaterialTheme = coerceBooleanProperty(value);
  }

  public get iconColor(): string {
    return this.forMaterialTheme ? '#6200ee' : '#00db92';
  }

  public get materialLightDemoUrl(): string {
    return this.forMaterialTheme
      ? 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=material-light&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_material_themes_material_light'
      : 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=material-light&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_landing_themes_material_light';
  }

  public get materialDarkDemoUrl(): string {
    return this.forMaterialTheme
      ? 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=material-dark&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_material_themes_material_dark'
      : 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=material-dark&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_landing_themes_material_dark';
  }

  public get lightDemoUrl(): string {
    return this.forMaterialTheme
      ? 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=default&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_material_themes_default'
      : 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=default&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_landing_themes_default';
  }

  public get darkDemoUrl(): string {
    return this.forMaterialTheme
      ? 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=dark&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_material_themes_dark'
      : 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=dark&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_landing_themes_dark';
  }

  public get cosmicDemoUrl(): string {
    return this.forMaterialTheme
      ? 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=cosmic&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_material_themes_cosmic'
      : 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=cosmic&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_landing_themes_cosmic';
  }

  public get corporateDemoUrl(): string {
    return this.forMaterialTheme
      ? 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=corporate&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_material_themes_corporate'
      : 'https://www.akveo.com/ngx-admin/pages/dashboard?theme=corporate&utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20docs&utm_source=ngx_admin&utm_medium=referral&utm_content=ngx_admin_landing_themes_corporate';
  }

  constructor(
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
  ) {
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
