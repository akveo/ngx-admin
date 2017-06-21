/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export const hasClass = (el: any, cls: string) => {
  return el.getAttribute('class').then((classes: string) => {
    return classes.split(' ').indexOf(cls) !== -1;
  });
};

export const hexToRgbA = (hex, alpha = 1) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${alpha})`;
  }
  throw new Error('Bad Hex');
};
