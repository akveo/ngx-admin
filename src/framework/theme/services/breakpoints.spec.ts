/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { TestBed, inject, async } from '@angular/core/testing';

import { DEFAULT_MEDIA_BREAKPOINTS, NgaMediaBreakpointsService } from './breakpoints.service';
import { ngaMediaBreakpointsToken } from '../theme.options';

describe('breakpoint-service', () => {
  let breakpointService: NgaMediaBreakpointsService;

  beforeEach(() => {
    // Configure testbed to prepare services
    TestBed.configureTestingModule({
      providers: [
        { provide: ngaMediaBreakpointsToken, useValue: DEFAULT_MEDIA_BREAKPOINTS },
        NgaMediaBreakpointsService,
      ],
    });
  });

// Single async inject to save references; which are used in all tests below
  beforeEach(async(inject(
    [NgaMediaBreakpointsService],
    (_breakpointService) => {
      breakpointService = _breakpointService
    },
  )));

  const total = 7;
  it(`has ${total} default breakpoints`, () => {
    expect(breakpointService.getBreakpoints().length).toEqual(total);
  });

  it(`handles unknown breakpoint`, () => {
    expect(breakpointService.getBreakpoint(-1).name).toEqual('unknown');
    expect(breakpointService.getBreakpoint(Number.NEGATIVE_INFINITY).name).toEqual('unknown');
    expect(breakpointService.getBreakpoint(Number.NaN).name).toEqual('unknown');
    expect(breakpointService.getBreakpoint(undefined).name).toEqual('unknown');
  });

  it(`has correct xs breakpoint`, () => {
    expect(breakpointService.getBreakpoint(0).name).toEqual('xs');
    expect(breakpointService.getBreakpoint(575).name).toEqual('xs');
  });

  it(`has correct sm breakpoint`, () => {
    expect(breakpointService.getBreakpoint(576).name).toEqual('sm');
    expect(breakpointService.getBreakpoint(690).name).toEqual('sm');
    expect(breakpointService.getBreakpoint(767).name).toEqual('sm');
  });

  it(`has correct md breakpoint`, () => {
    expect(breakpointService.getBreakpoint(768).name).toEqual('md');
    expect(breakpointService.getBreakpoint(934).name).toEqual('md');
    expect(breakpointService.getBreakpoint(991).name).toEqual('md');
  });

  it(`has correct lg breakpoint`, () => {
    expect(breakpointService.getBreakpoint(992).name).toEqual('lg');
    expect(breakpointService.getBreakpoint(1001).name).toEqual('lg');
    expect(breakpointService.getBreakpoint(1199).name).toEqual('lg');
  });

  it(`has correct xl breakpoint`, () => {
    expect(breakpointService.getBreakpoint(1200).name).toEqual('xl');
    expect(breakpointService.getBreakpoint(1303).name).toEqual('xl');
    expect(breakpointService.getBreakpoint(1399).name).toEqual('xl');
  });

  it(`has correct xxl breakpoint`, () => {
    expect(breakpointService.getBreakpoint(1400).name).toEqual('xxl');
    expect(breakpointService.getBreakpoint(1556).name).toEqual('xxl');
    expect(breakpointService.getBreakpoint(1599).name).toEqual('xxl');
  });

  it(`has correct xxxl breakpoint`, () => {
    expect(breakpointService.getBreakpoint(1600).name).toEqual('xxxl');
    expect(breakpointService.getBreakpoint(1900).name).toEqual('xxxl');
    expect(breakpointService.getBreakpoint(Number.POSITIVE_INFINITY).name).toEqual('xxxl');
  });
});
