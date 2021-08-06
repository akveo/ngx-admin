/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Inject, Injectable } from '@angular/core';
import { DOCS } from '../../app.options';

@Injectable()
export class NgxStylesService {

  constructor(@Inject(DOCS) private docs) {
  }

  mapThemedValues(classStyles: any): any {
    return classStyles.map(item => {
      item.styles.map(prop => {
        prop.themedValues = [];
        for (const themeName in this.docs.themes) {
          if (this.docs.themes.hasOwnProperty(themeName)) {
            prop.themedValues.push({
              theme: this.docs.themes[themeName].name,
              value: this.docs.themes[themeName].data[prop.name].value,
            });
          }
        }
        return prop;
      });
      return item;
    });
  }
}
