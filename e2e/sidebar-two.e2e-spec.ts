/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { browser, element, by } from 'protractor';

describe('nga-sidebar-two', () => {

  beforeEach(() => {
    browser.get('#/sidebar/two');
  });

  it('should render right fixed sidebar height equal layout height', () => {
    Promise.all([
      element(by.css('nga-layout')).getSize(),
      element(by.css('nga-sidebar[fixed]')).getSize(),
    ]).then(([layoutSize, sidebarSize]) => {
      expect(sidebarSize.height).toEqual(layoutSize.height);
    });
  });

  it('should render left non-fixed sidebar height minus header', () => {
    Promise.all([
      element(by.css('nga-layout')).getSize(),
      element(by.css('nga-layout-header')).getSize(),
      element.all(by.css('nga-sidebar')).get(0).getSize(),
    ]).then(([layoutSize, headerSize, sidebarSize]) => {
      expect(sidebarSize.height).toEqual(layoutSize.height - headerSize.height);
    });
  });

  it('should render fixed sidebar with absolute position', () => {
    element(by.css('nga-sidebar[fixed]')).getCssValue('position').then(value => {
      expect(value).toMatch('absolute');
    });
  });

  it('should render fixed right sidebar at right', () => {
    element(by.css('nga-sidebar[right]')).getCssValue('right').then(value => {
      expect(value).toMatch('0');
    });
  });
});
