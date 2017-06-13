/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';
import { hexToRgbA } from './e2e-helper';

const heights = {
  small: '120px',
  xsmall: '192px',
  medium: '400px',
  xmedium: '576px',
  large: '960px',
};

const colors = {
  //Make sure that you convert hex to rgba before validation
  primary: '#8c6fff',
  success: '#6ad996',
  info: '#26bbff',
  warning: '#fffc75',
  danger: '#ff9c89',
  default: '#7179a3',
  disabled: 'rgba(255, 255, 255, 0.4)',
};

let cards: any[] = [];

function prepareCards() {
  const result: any[] = [];

  let elementNumber: number = 14;
  for (let colorKey in colors) {
    for (let heightKey in heights) {
      result.push({
        name: heightKey,
        height: heights[heightKey],
        colorKey: colorKey,
        color: colorKey == 'disabled' ? colors[colorKey] : hexToRgbA(colors[colorKey]),
        elementNumber,
      });
      elementNumber++;
    }
  }
  return result;
}

describe('nga-card', () => {

  cards = prepareCards();

  beforeEach(() => {
    browser.get('/');
  });

  it('should display default card', () => {
    expect(element(by.css('nga-card:nth-child(1) > nga-card-header')).getText()).toEqual('HEADER');

    expect(element(by.css('nga-card:nth-child(1) > nga-card-body')).getText()).toEqual('Body');

    expect(element(by.css('nga-card:nth-child(1) > nga-card-footer')).getText()).toEqual('Footer');
  });

  it('should display small card', () => {
    element(by.css('nga-card:nth-child(2)')).getCssValue('height').then(height => {
      expect(height).toEqual(heights['small']);
    });
  });

  it('should display xsmall card', () => {
    element(by.css('nga-card:nth-child(3)')).getCssValue('height').then(height => {
      expect(height).toEqual(heights['xsmall']);
    });
  });

  it('should display medium card', () => {
    element(by.css('nga-card:nth-child(4)')).getCssValue('height').then(height => {
      expect(height).toEqual(heights['medium']);
    });
  });

  it('should display xmedium card', () => {
    element(by.css('nga-card:nth-child(5)')).getCssValue('height').then(height => {
      expect(height).toEqual(heights['xmedium']);
    });
  });

  it('should display large card', () => {
    element(by.css('nga-card:nth-child(6)')).getCssValue('height').then(height => {
      expect(height).toEqual(heights['large']);
    });
  });

  it('should display card with primary header', () => {
    element(by.css('nga-card:nth-child(7) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['primary']));
    });

    element(by.css('nga-card:nth-child(7) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['primary']));
    });
  });

  it('should display card with success header', () => {
    element(by.css('nga-card:nth-child(8) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['success']));
    });

    element(by.css('nga-card:nth-child(8) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['success']));
    });
  });

  it('should display card with info header', () => {
    element(by.css('nga-card:nth-child(9) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['info']));
    });

    element(by.css('nga-card:nth-child(9) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['info']));
    });
  });

  it('should display card with warning header', () => {
    element(by.css('nga-card:nth-child(10) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['warning']));
    });

    element(by.css('nga-card:nth-child(10) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['warning']));
    });
  });

  it('should display card with danger header', () => {
    element(by.css('nga-card:nth-child(11) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['danger']));
    });

    element(by.css('nga-card:nth-child(11) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['danger']));
    });
  });

  it('should display card with active header', () => {
    element(by.css('nga-card:nth-child(12) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['default']));
    });

    element(by.css('nga-card:nth-child(12) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(hexToRgbA(colors['default']));
    });
  });

  it('should display card with disabled header', () => {
    element(by.css('nga-card:nth-child(13) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(colors['disabled']);
    });

    element(by.css('nga-card:nth-child(13) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(colors['disabled']);
    });
  });

  cards.forEach(c => {
    it(`should display ${c.name} card with ${c.colorKey} header`, () => {
      expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-header`))
        .getText()).toEqual('HEADER');

      expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-body`))
        .getText()).toEqual('Body');

      expect(element(by.css(`nga-card:nth-child(${c.elementNumber}) > nga-card-footer`))
        .getText()).toEqual('Footer');

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
