/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Injectable } from '@angular/core';

// TODO: move to theme config
// TODO: add xxl, xxxl
const breakpoints = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'sm',
    width: 576,
  },
  {
    name: 'md',
    width: 768,
  },
  {
    name: 'lg',
    width: 992,
  },
  {
    name: 'xl',
    width: 1200,
  },
];

@Injectable()
export class NgaThemeBreakpointsService {

  getBreakpoint(width: number): { name: string, width: number } {
    return breakpoints
      .find((point: any, index: number) => {
        const next = breakpoints[index + 1];
        return width >= point.width && (!next || width < next.width)
      });
  }
}
