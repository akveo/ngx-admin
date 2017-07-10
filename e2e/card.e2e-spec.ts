/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';
import { hexToRgbA } from './e2e-helper';

const heights = {
  xsmall: '96px',
  small: '216px',
  medium: '456px',
  large: '576px',
  xlarge: '696px',
  xxlarge: '816px',
};

const colors = {
  // Make sure that you convert hex to rgba before validation
  primary: '#8066ff',
  success: '#00cc66',
  info: '#3377ff',
  warning: '#e5b045',
  danger: '#ff3355',
  default: '#d1d1ff',
  disabled: 'rgba(255, 255, 255, 0.4)',
};

let cards: any[] = [];

function prepareCards() {
  const result: any[] = [];

  let elementNumber: number = 1;
  for (const colorKey in colors) {
    if (colors.hasOwnProperty(colorKey)) {
      for (const heightKey in heights) {
        if (heights.hasOwnProperty(heightKey)) {
          result.push({
            name: heightKey,
            height: heights[heightKey],
            colorKey,
            color: colorKey === 'disabled' ? colors[colorKey] : hexToRgbA(colors[colorKey]),
            elementNumber,
          });
          elementNumber++;
        }
      }
    }
  }
  return result;
}

describe('nga-card', () => {

  cards = prepareCards();

  beforeEach(() => {
    browser.get('#/card-status');
  });

  cards.forEach(c => {
    it(`should display ${c.name} card with ${c.colorKey} header`, () => {
      expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-header`))
        .getText()).toEqual('Header');

      expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-body`))
        .getText()).toEqual('Body');

      if (c.name !== 'small') {
        expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-footer`))
          .getText()).toEqual('Footer');
      }

      element(by.css(`nga-card:nth-child(${c.elementNumber})`)).getCssValue('height').then(height => {
        expect(height).toEqual(c.height);
      });

      element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-header`))
        .getCssValue('background-color').then(bgColor => {
          expect(bgColor).toEqual(c.color);
        });

      element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-header`))
        .getCssValue('border-bottom-color').then(bgColor => {
          expect(bgColor).toEqual(c.color);
        });
    });
  });
});
