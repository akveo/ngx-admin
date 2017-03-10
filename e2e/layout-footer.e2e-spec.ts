import { browser, element, by } from 'protractor';

describe('nga-layout-footer', () => {

  beforeEach(() => {
    browser.get('#/nga-layout-footer');
  });

  it('should render default footer', () => {
    element(by.css('nga-layout-footer > nav')).getAttribute('class').then(value => {
      expect(value).toMatch('navbar');
    });
  });

  it('should stick fixed footer', () => {
    element(by.css('nga-layout-footer[fixed]')).getCssValue('position').then(value => {
      expect(value).toEqual('static');
    });
  });

  it('should have height', () => {
    element(by.css('nga-layout-footer nav')).getCssValue('height').then(value => {
      expect(value).toEqual('80px');
    });
  });

  it('should be flex', () => {
    element(by.css('nga-layout-footer nav')).getCssValue('display').then(value => {
      expect(value).toEqual('flex');
    });
  });

  it('should align items vertically', () => {
    element(by.css('nga-layout-footer nav')).getCssValue('justify-content').then(value => {
      expect(value).toEqual('center');
    });
  });

  it('should add padding to body', () => {
    element(by.css('nga-layout > .main-container')).getCssValue('padding-bottom').then(value => {
      expect(value).toEqual('96px');
    });
  });

});
