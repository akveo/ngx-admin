/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Inject, Injectable } from '@angular/core';
import { ngaMediaBreakpointsToken } from '../theme.options';

/**
 * Media breakpoint type
 *
 * Where `name` - breakpoint name alias (e.g. xs, sm, md, etc), and width - min breakpoint width
 */
export interface NgaMediaBreakpoint {
  name: string;
  width: number;
}

export const DEFAULT_MEDIA_BREAKPOINTS = [
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
  {
    name: 'xxl',
    width: 1400,
  },
  {
    name: 'xxxl',
    width: 1600,
  },
];

/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
@Injectable()
export class NgaMediaBreakpointsService {


  constructor(@Inject(ngaMediaBreakpointsToken) private breakpoints) {
  }

  /**
   * Returns a configured breakpoint by width
   * @param width number
   * @returns {Z|{name: string, width: number}}
   */
  getBreakpoint(width: number): NgaMediaBreakpoint {
    const unknown = { name: 'unknown', width: width };
    const breakpoints = this.getBreakpoints();

    return breakpoints
      .find((point: any, index: number) => {
        const next = breakpoints[index + 1];
        return width >= point.width && (!next || width < next.width);
      }) || unknown;
  }

  /**
   * Returns a list of configured breakpoins for the theme
   * @returns {{name: string, width: number}[]}
   */
  getBreakpoints(): NgaMediaBreakpoint[] {
    return this.breakpoints;
  }
}
