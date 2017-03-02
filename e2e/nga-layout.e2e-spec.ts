import { browser, element, by } from 'protractor';

describe('nga-layout', () => {
  it('should display default layout', () => {
    browser.get('#/nga-layout');

    element(by.css('#default-layout > nga-layout-sidebar')).getCssValue('order').then(order => {
      expect(order).toEqual('0');
    });

    element(by.css('#default-layout')).getCssValue('min-height').then(minHeight => {
      expect(minHeight).toEqual('500px');
    });
  });

  it('should display layout with left sidebar', () => {
    browser.get('#/nga-layout');

    element(by.css('#left-sidebar-layout > nga-layout-sidebar')).getCssValue('order').then(order => {
      expect(order).toEqual('0');
    });
  });

  it('should display layout with right sidebar', () => {
    browser.get('#/nga-layout');

    element(by.css('#right-sidebar-layout > nga-layout-sidebar')).getCssValue('order').then(order => {
      expect(order).toEqual('2');
    });
  });

  it('should display layout with left and right sidebars', () => {
    browser.get('#/nga-layout');

    element(by.css('#two-sidebars-layout > nga-layout-sidebar[left]')).getCssValue('order').then(order => {
      expect(order).toEqual('0');
    });

    element(by.css('#two-sidebars-layout > nga-layout-sidebar[right]')).getCssValue('order').then(order => {
      expect(order).toEqual('2');
    });
  });
});
