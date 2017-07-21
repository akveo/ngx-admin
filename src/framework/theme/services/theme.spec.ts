/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { TestBed, inject, async } from '@angular/core/testing';

import { DEFAULT_MEDIA_BREAKPOINTS, NgaMediaBreakpointsService } from './breakpoints.service';
import { NgaThemeService } from './theme.service';
import { BUILT_IN_THEMES, NgaJSThemesRegistry } from './js-themes-registry.service';
import {
  ngaBuiltInJSThemesToken, ngaJSThemesToken, ngaMediaBreakpointsToken,
  ngaThemeOptionsToken,
} from '../theme.options';

describe('theme-service', () => {
  let breakpointService: NgaMediaBreakpointsService;
  let themeService: NgaThemeService;

  beforeEach(() => {
    // Configure testbed to prepare services
    TestBed.configureTestingModule({
      providers: [
        { provide: ngaMediaBreakpointsToken, useValue: DEFAULT_MEDIA_BREAKPOINTS },
        NgaMediaBreakpointsService,
        { provide: ngaJSThemesToken, useValue: [] },
        { provide: ngaBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
        NgaJSThemesRegistry,
        { provide: ngaThemeOptionsToken, useValue: { name: 'default' } },
        NgaThemeService,
      ],
    });
  });

// Single async inject to save references; which are used in all tests below
  beforeEach(async(inject(
    [NgaMediaBreakpointsService, NgaThemeService],
    (_breakpointService, _themeService) => {
      breakpointService = _breakpointService;
      themeService = _themeService;
    },
  )));

  it('returns default theme specified in config', () => {
    let current: any;

    const subscription = themeService.onThemeChange()
      .subscribe((change: any) => {
        current = change;
      });
    try {
      expect(current.name).toEqual('default');
      expect(current.previous).toBeUndefined();
    } finally {
      subscription.unsubscribe();
    }
  });

  it('listens to theme change, saving a previous one', () => {
    let current: any;

    const subscription = themeService.onThemeChange()
      .subscribe((change: any) => {
        current = change;
      });
    try {
      expect(current.name).toEqual('default');
      expect(current.previous).toBeUndefined();

      themeService.changeTheme('cosmic');
      expect(current.name).toEqual('cosmic');
      expect(current.previous).toEqual('default');

      themeService.changeTheme('foobar');
      expect(current.name).toEqual('foobar');
      expect(current.previous).toEqual('cosmic');
    } finally {
      subscription.unsubscribe();
    }
  });

  it('listens to window media query change', () => {
    let current: any;

    const subscription = themeService.onMediaQueryChange()
      .subscribe((change: any) => {
        current = change;
      });
    try {
      expect(current).toBeUndefined();

      themeService.changeWindowWidth(1920);
      expect(current[0].name).toEqual(breakpointService.getBreakpoint(undefined).name);

      const xs = 200;
      themeService.changeWindowWidth(xs);
      expect(current[1].name).toEqual(breakpointService.getBreakpoint(xs).name);

      const sm = 576;
      themeService.changeWindowWidth(sm);
      expect(current[0].name).toEqual(breakpointService.getBreakpoint(xs).name);
      expect(current[1].name).toEqual(breakpointService.getBreakpoint(sm).name);
    } finally {
      subscription.unsubscribe();
    }
  });

  it('listens to theme variables change', () => {
    let current: any;

    const subscription = themeService.getJsTheme()
      .subscribe((change: any) => {
        current = change;
      });
    try {
      expect(current).not.toBeUndefined();
      expect(current.fontMain).toEqual('Open Sans');
      expect(current.colorBg).toEqual('#3d3780');

      themeService.changeTheme('cosmic');

      expect(current.colorBg).toEqual('#3d3780');

    } finally {
      subscription.unsubscribe();
    }
  });

});
