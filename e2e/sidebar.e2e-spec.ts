/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';

describe('nga-sidebar', () => {

  beforeEach(() => {
    browser.get('#/sidebar');
  });

  it('should render sidebar hidden', () => {
    element.all(by.css('nga-sidebar[state="collapsed"]')).get(0).getSize().then(sidebarSize => {
      expect(sidebarSize.width).toEqual(0);
    });
  });

  it('should render sidebar compacted', () => {
    element.all(by.css('nga-sidebar[state="compacted"]')).get(0).getSize().then(sidebarSize => {
      expect(sidebarSize.width).toEqual(64);
    });
  });

  it('should open/close sidebar', () => {

    const button = element(by.css('#collapse-left'));
    const sidebar = element(by.css('nga-sidebar[fixed]'));

    button.click().then(() => {
      return browser.driver.wait(() => {
        return sidebar.getSize().then(sidebarSize => {
          return sidebarSize.width === 192;
        });
      }, 10000);
    });

    sidebar.getSize().then(sidebarSize => {
      expect(sidebarSize.width).toEqual(192);
    });

    button.click().then(() => {
      return browser.driver.wait(() => {
        return sidebar.getSize().then(sidebarSize => {
          return sidebarSize.width === 0;
        });
      }, 10000);
    });

    sidebar.getSize().then(sidebarSize => {
      expect(sidebarSize.width).toEqual(0);
    });
  });

  it('should open/compact sidebar', () => {

    const button = element(by.css('#collapse-right'));
    const sidebar = element(by.css('nga-sidebar[right]'));

    button.click().then(() => {
      return browser.driver.wait(() => {
        return sidebar.getSize().then(sidebarSize => {
          return sidebarSize.width === 192;
        });
      }, 10000);
    });

    sidebar.getSize().then(sidebarSize => {
      expect(sidebarSize.width).toEqual(192);
    });

    button.click().then(() => {
      return browser.driver.wait(() => {
        return sidebar.getSize().then(sidebarSize => {
          return sidebarSize.width === 64;
        });
      }, 10000);
    });

    sidebar.getSize().then(sidebarSize => {
      expect(sidebarSize.width).toEqual(64);
    });
  });

});
