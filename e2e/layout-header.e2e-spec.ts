import { browser, element, by } from 'protractor';

describe('nga-layout-header', () => {

  beforeEach(() => {
    browser.get('#/nga-layout-header');
  });

  it('should render default header', () => {
    element(by.css('nga-layout-header > nav')).getAttribute('class').then(value => {
      expect(value).toMatch('navbar');
    });
  });

  it('should stick fixed header', () => {
    element(by.css('nga-layout-header[fixed]')).getCssValue('position').then(value => {
      expect(value).toEqual('static');
    });
  });

  it('should have height', () => {
    element(by.css('nga-layout-header nav')).getCssValue('height').then(value => {
      expect(value).toEqual('56px');
    });
  });

  it('should be flex', () => {
    element(by.css('nga-layout-header nav')).getCssValue('display').then(value => {
      expect(value).toEqual('flex');
    });
  });

  it('should align items vertically', () => {
    element(by.css('nga-layout-header nav')).getCssValue('justify-content').then(value => {
      expect(value).toEqual('center');
    });
  });

});
