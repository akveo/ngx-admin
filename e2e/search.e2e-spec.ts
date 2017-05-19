/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';
import { hasClass } from './e2e-helper';
import { protractor } from 'protractor/built/ptor';

describe('nga-search', () => {

  beforeEach(() => {
    browser.get('#/search');
  });

  it('should be able to show search-field', () => {
    element(by.css('.search-wrap button')).click();
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeTruthy();
  });

  it('should be able to change layout style', () => {
    element(by.css('.search-wrap button')).click();
    expect(hasClass(element(by.css('nga-layout')), 'with-search')).toBeTruthy();
  });

  it('should focus on opened search field', () => {
    element(by.css('.search-wrap button')).click();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search-input')).toBeTruthy();
  });

  it('should be able to close search-field with close button', () => {
    element(by.css('.search-wrap button')).click();
    element(by.css('.search button')).click();
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeFalsy();
  });

  it('should remove class from layout when search closed', () => {
    element(by.css('.search-wrap button')).click();
    element(by.css('.search button')).click();
    expect(hasClass(element(by.css('nga-layout')), 'with-search')).toBeFalsy();
  });

  it('should remove focus from input when search closed', () => {
    element(by.css('.search-wrap button')).click();
    element(by.css('.search button')).click();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search-input')).toBeFalsy();
  });

  it('should clean search input when closed', () => {
    element(by.css('.search-wrap button')).click();
    element(by.css('.search-input')).sendKeys('akveo');
    element(by.css('.search button')).click();
    expect(element(by.css('.search-input')).getAttribute('value')).toEqual('');
  });

  it('should be able to close search-field with esc', () => {
    element(by.css('.search-wrap button')).click();
    element(by.css('.search-input')).sendKeys(protractor.Key.ESCAPE);
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeFalsy();
    expect(hasClass(element(by.css('nga-layout')), 'with-search')).toBeFalsy();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search-input')).toBeFalsy();
    expect(element(by.css('.search-input')).getAttribute('value')).toEqual('');
  });

  it('should be able to submit search and close search-field with enter', () => {
    element(by.css('.search-wrap button')).click();
    element(by.css('.search-input')).sendKeys('akveo');
    element(by.css('.search-input')).sendKeys(protractor.Key.ENTER);
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeFalsy();
    expect(hasClass(element(by.css('nga-layout')), 'with-search')).toBeFalsy();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search-input')).toBeFalsy();
    expect(element(by.css('.search-input')).getAttribute('value')).toEqual('');
  });
});
