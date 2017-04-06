/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { browser, element, by } from 'protractor';

const defaultHeight: number = 161;
const smallHeight: number = 219;
const xsmallHeight: number = 292;
const mediumHeight: number = 505;
const xmediumHeight: number = 655;
const largeHeight: number = 1079;

const primaryColor: string = 'rgba(0, 171, 255, 1)';
const successColor: string = 'rgba(139, 210, 47, 1)';
const infoColor: string = 'rgba(64, 218, 241, 1)';
const warningColor: string = 'rgba(231, 186, 8, 1)';
const dangerColor: string = 'rgba(249, 83, 114, 1)';
const activeColor: string = 'rgba(63, 66, 67, 1)';
const disabledColor: string = 'rgba(255, 255, 255, 0.4)';

const heights: any[] = [
  {
    key: 'small',
    value: smallHeight,
  },
  {
    key: 'xsmall',
    value: xsmallHeight,
  },
  {
    key: 'medium',
    value: mediumHeight,
  },
  {
    key: 'xmedium',
    value: xmediumHeight,
  },
  {
    key: 'large',
    value: largeHeight,
  },
];

const colors: any[] = [
  {
    key: 'primary',
    value: primaryColor,
  },
  {
    key: 'success',
    value: successColor,
  },
  {
    key: 'info',
    value: infoColor,
  },
  {
    key: 'warning',
    value: warningColor,
  },
  {
    key: 'danger',
    value: dangerColor,
  },
  {
    key: 'active',
    value: activeColor,
  },
  {
    key: 'disabled',
    value: disabledColor,
  },
];

let cards: any[] = [];

function prepareCards() {
  const result: any[] = [];

  let elementNumber: number = 14;

  colors.forEach(color => {
    heights.forEach(height => {
      result.push({
        name: height.key,
        height: height.value,
        color: color.value,
        colorKey: color.key,
        elementNumber,
      });
      elementNumber++;
    });
  });

  return result;
}

describe('nga-card', () => {

  cards = prepareCards();

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.get('/');
  });

  it('should display default card', () => {
    expect(element(by.css('nga-card:nth-child(1) > nga-card-header')).getText()).toEqual('HEADER');

    expect(element(by.css('nga-card:nth-child(1) > nga-card-body')).getText()).toEqual('Body');

    expect(element(by.css('nga-card:nth-child(1) > nga-card-footer')).getText()).toEqual('Footer');

    element(by.css('nga-card:nth-child(1)')).getSize().then(el => {
      expect(el.height).toEqual(defaultHeight);
    });
  });

  it('should display small card', () => {
    element(by.css('nga-card:nth-child(2)')).getSize().then(el => {
      expect(el.height).toEqual(smallHeight);
    });
  });

  it('should display xsmall card', () => {
    element(by.css('nga-card:nth-child(3)')).getSize().then(el => {
      expect(el.height).toEqual(xsmallHeight);
    });
  });

  it('should display medium card', () => {
    element(by.css('nga-card:nth-child(4)')).getSize().then(el => {
      expect(el.height).toEqual(mediumHeight);
    });
  });

  it('should display xmedium card', () => {
    element(by.css('nga-card:nth-child(5)')).getSize().then(el => {
      expect(el.height).toEqual(xmediumHeight);
    });
  });

  it('should display large card', () => {
    element(by.css('nga-card:nth-child(6)')).getSize().then(el => {
      expect(el.height).toEqual(largeHeight);
    });
  });

  it('should display card with primary header', () => {
    element(by.css('nga-card:nth-child(7) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(primaryColor);
    });

    element(by.css('nga-card:nth-child(7) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(primaryColor);
    });
  });

  it('should display card with success header', () => {
    element(by.css('nga-card:nth-child(8) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(successColor);
    });

    element(by.css('nga-card:nth-child(8) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(successColor);
    });
  });

  it('should display card with info header', () => {
    element(by.css('nga-card:nth-child(9) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(infoColor);
    });

    element(by.css('nga-card:nth-child(9) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(infoColor);
    });
  });

  it('should display card with warning header', () => {
    element(by.css('nga-card:nth-child(10) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(warningColor);
    });

    element(by.css('nga-card:nth-child(10) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(warningColor);
    });
  });

  it('should display card with danger header', () => {
    element(by.css('nga-card:nth-child(11) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(dangerColor);
    });

    element(by.css('nga-card:nth-child(11) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(dangerColor);
    });
  });

  it('should display card with active header', () => {
    element(by.css('nga-card:nth-child(12) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(activeColor);
    });

    element(by.css('nga-card:nth-child(12) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(activeColor);
    });
  });

  it('should display card with disabled header', () => {
    element(by.css('nga-card:nth-child(13) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual(disabledColor);
    });

    element(by.css('nga-card:nth-child(13) > nga-card-header')).getCssValue('border-bottom-color').then(bgColor => {
      expect(bgColor).toEqual(disabledColor);
    });
  });

  cards.forEach(c => {
    it(`should display ${c.name} card with ${c.colorKey} header`, () => {
      expect(element(by.css('nga-card:nth-child(' + c.elementNumber + ') > nga-card-header'))
        .getText()).toEqual('HEADER');

      expect(element(by.css('nga-card:nth-child(' + c.elementNumber + ') > nga-card-body'))
        .getText()).toEqual('Body');

      expect(element(by.css('nga-card:nth-child(' + c.elementNumber + ') > nga-card-footer'))
        .getText()).toEqual('Footer');

      element(by.css('nga-card:nth-child(' + c.elementNumber + ')')).getSize().then(el => {
        expect(el.height).toEqual(c.height);
      });

      element(by.css('nga-card:nth-child(' + c.elementNumber + ') > nga-card-header'))
        .getCssValue('background-color').then(bgColor => {
          expect(bgColor).toEqual(c.color);
        });

      element(by.css('nga-card:nth-child(' + c.elementNumber + ') > nga-card-header'))
        .getCssValue('border-bottom-color').then(bgColor => {
          expect(bgColor).toEqual(c.color);
        });
    });
  });

});
