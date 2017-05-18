/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';
import { hasClass } from './e2e-helper';

fdescribe('nga-tabset', () => {
  beforeEach(() => {
    browser.get('#/tabset');
  });

  it('should display default tabset', () => {
    expect(element(by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(1)')).getText()).toEqual('Tab #1');
    expect(element(by.css('nga-tabset:nth-child(1) > nga-tab[tabTitle="Tab #1"] > span'))
      .getText()).toEqual('Content #1');

    expect(element(by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(2)')).getText()).toEqual('Tab #2');
    expect(element(by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(3)')).getText()).toEqual('Tab #3');
  });

  it('should change the tabs', () => {
    const tab2 = by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(2)');

    element(tab2).click()
      .then(() => {
        expect(hasClass(element(tab2), 'active')).toBeTruthy();
      });

    const tab3 = by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(3)');

    element(tab3).click()
      .then(() => {
        expect(hasClass(element(tab3), 'active')).toBeTruthy();
      });

    const tab1 = by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(1)');

    element(tab1).click()
      .then(() => {
        expect(hasClass(element(tab1), 'active')).toBeTruthy();
      });
  });

  it('should display tabset with second active tab', () => {
    expect(hasClass(element(by.css('nga-tabset:nth-child(2) > ul.nga-tabset > li:nth-child(2)')), 'active'))
      .toBeTruthy();
  });

  it('should display tabset with third active tab', () => {
    expect(hasClass(element(by.css('nga-tabset:nth-child(3) > ul.nga-tabset > li:nth-child(3)')), 'active'))
      .toBeTruthy();
  });

  it('should change the tabs with the enabled routes', () => {
    const tab2 = by.css('nga-tabset:nth-child(4) > ul.nga-tabset > li:nth-child(2)');

    element(tab2).click()
      .then(() => {
        expect(hasClass(element(tab2), 'active')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('/#/tabset/tab2');
      });

    const tab3 = by.css('nga-tabset:nth-child(4) > ul.nga-tabset > li:nth-child(3)');

    element(tab3).click()
      .then(() => {
        expect(hasClass(element(tab3), 'active')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('/#/tabset/tab3');
      });

    const tab1 = by.css('nga-tabset:nth-child(4) > ul.nga-tabset > li:nth-child(1)');

    element(tab1).click()
      .then(() => {
        expect(hasClass(element(tab1), 'active')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('/#/tabset/tab1');
      });
  });
});
