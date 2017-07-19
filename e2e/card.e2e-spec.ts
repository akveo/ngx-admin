/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';
import { hexToRgbA } from './e2e-helper';

const heights = {
  xxsmall: '96px',
  xsmall: '216px',
  small: '336px',
  medium: '456px',
  large: '576px',
  xlarge: '696px',
  xxlarge: '816px',
};

const colors = {
  // Make sure that you convert hex to rgba before validation
  primary: '#a48aff',
  success: '#00e172',
  info: '#4e9fff',
  warning: '#e5c742',
  danger: '#ff666d',
  default: '#555555',
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

    it(`should display ${c.colorKey} card with ${c.name} size`, () => {
      expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-header`))
        .getText()).toEqual('Header');

      if (c.name !== 'xxsmall') {
        expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-body`))
          .getText()).toEqual('Body');

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
