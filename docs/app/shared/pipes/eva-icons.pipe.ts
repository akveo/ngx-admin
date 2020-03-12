/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { icons } from 'eva-icons';

@Pipe({ name: 'eva' })
export class EvaIconsPipe implements PipeTransform {

  private defaultOptions = {
    height: 24,
    width: 24,
    fill: 'inherit',
    animationHover: true,
    animationInfinity: false,
  };

  constructor(private sanitizer: DomSanitizer) {}

  transform(icon: string,
            options: {
              height: number;
              width: number;
              fill: string;
              animationType?: string;
              animationHover?: boolean;
              animationInfinity?: boolean;
            },
  ) {
    const mergedOptions = {
      ...this.defaultOptions,
      ...options,
    };
    const { width, height, fill, animationType, animationHover, animationInfinity } = mergedOptions;
    const animation = animationType ?
      { type: animationType, hover: animationHover, infinite: animationInfinity } :
      null;

    return this.sanitizer.bypassSecurityTrustHtml(icons[icon].toSvg({
      width,
      height,
      fill,
      animation,
    }));
  }
}
