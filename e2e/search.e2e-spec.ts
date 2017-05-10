/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';
import { hasClass } from './e2e-helper';
import { protractor } from "protractor/built/ptor";

describe('nga-search', () => {

  beforeEach(() => {
    browser.get('#/super-search');
  });

  it('should be able to show search-field', () => {
    element(by.css('.search__btn-open')).click();
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeTruthy();
  });

  it('should be able to change layout style', () => {
    element(by.css('.search__btn-open')).click();
    expect(hasClass(element(by.css('nga-layout')), 'show')).toBeTruthy();
  });

  it('should focus on opened search field', () => {
    element(by.css('.search__btn-open')).click();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search__input')).toBeTruthy();
  });

  it('should be able to close search-field with close button', () => {
    element(by.css('.search__btn-open')).click();
    element(by.css('.search__btn-close')).click();
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeFalsy();
  });

  it('should remove class from layout when search closed', () => {
    element(by.css('.search__btn-open')).click();
    element(by.css('.search__btn-close')).click();
    expect(hasClass(element(by.css('nga-layout')), 'show')).toBeFalsy();
  });

  it('should remove focus from input when search closed', () => {
    element(by.css('.search__btn-open')).click();
    element(by.css('.search__btn-close')).click();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search__input')).toBeFalsy();
  });

  it('should clean search input when closed', () => {
    element(by.css('.search__btn-open')).click();
    element(by.css('.search__input')).sendKeys("akveo");
    element(by.css('.search__btn-close')).click();
    expect(element(by.css('.search__input')).getAttribute('value')).toEqual('');
  });

  it('should be able to close search-field with esc', () => {
    element(by.css('.search__btn-open')).click();
    element(by.css('.search__input')).sendKeys(protractor.Key.ESCAPE);
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeFalsy();
    expect(hasClass(element(by.css('nga-layout')), 'show')).toBeFalsy();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search__input')).toBeTruthy();
    expect(element(by.css('.search__input')).getAttribute('value')).toEqual('');
  });

  it('should be able to submit search and close search-field with enter', () => {
    element(by.css('.search__btn-open')).click();
    element(by.css('.search__input')).sendKeys('akveo');
    element(by.css('.search__input')).sendKeys(protractor.Key.ENTER);
    expect(hasClass(element(by.css('nga-search-field')), 'show')).toBeFalsy();
    expect(hasClass(element(by.css('nga-layout')), 'show')).toBeFalsy();
    expect(hasClass(browser.driver.switchTo().activeElement(), 'search__input')).toBeFalsy();
    expect(element(by.css('.search__input')).getAttribute('value')).toEqual('');
  })
});
