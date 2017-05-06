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
