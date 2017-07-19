/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';

describe('nga-layout theme', () => {

  beforeEach(() => {
    browser.get('#/layout/change-theme');
  });

  it('should render default theme', () => {
    element(by.css('nga-layout')).getAttribute('class').then(value => {
      expect(value).toMatch('theme-default');
    });
  });

  it('should switch theme', () => {

    const button = element(by.css('#change-theme'));
    const layout = element(by.css('nga-layout'));
    const cardHeader = element(by.css('nga-card-header'));

    const themeDefault = 'nga-theme-default';
    const themeBlue = 'nga-theme-blue';

    button.click().then(() => {
      return browser.driver.wait(() => {
        return layout.getAttribute('class').then(value => {
          return value === themeBlue;
        });
      }, 10000);
    });

    layout.getAttribute('class').then(value => {
      expect(value).toEqual(themeBlue);
    });
    cardHeader.getCssValue('color').then(value => {
      expect(value).toEqual('rgba(255, 255, 255, 1)');
    });
    cardHeader.getCssValue('text-decoration').then(value => {
      expect(value).toMatch('none');
    });

    button.click().then(() => {
      return browser.driver.wait(() => {
        return layout.getAttribute('class').then(value => {
          return value === themeDefault;
        });
      }, 10000);
    });

    layout.getAttribute('class').then(value => {
      expect(value).toEqual(themeDefault);
    });
    cardHeader.getCssValue('color').then(value => {
      expect(value).toEqual('rgba(51, 51, 51, 1)');
    });
    cardHeader.getCssValue('text-decoration').then(value => {
      expect(value).toMatch('none');
    });
  });

});
