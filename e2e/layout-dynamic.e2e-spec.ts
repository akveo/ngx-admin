/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { browser, element, by } from 'protractor';

fdescribe('nga-layout theme', () => {

  beforeEach(() => {
    browser.get('#/layout/dynamic');
  });

  it('shown have layout first', () => {
    element(by.css('nga-layout')).$$('*').first().getTagName().then(value => {
      expect(value).toMatch('div');
    });
  });

  it('should insert append into nga-layout', () => {

    const button = element(by.css('#add-dynamic'));

    button.click().then(() => {
      return browser.driver.wait(() => {
        return element(by.css('nga-layout')).$$('*').first().getTagName().then(value => {
          return value === 'nga-dynamic-to-add';
        });
      }, 10000);
    });

    element(by.css('nga-layout')).$$('*').first().getTagName().then(value => {
      expect(value).toMatch('nga-dynamic-to-add');
    });
    element(by.css('nga-layout')).$$('*').get(1).getTagName().then(value => {
      expect(value).toMatch('div');
    });
  });

});
