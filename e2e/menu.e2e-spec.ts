/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { browser, element, by } from 'protractor';

import { hasClass } from './e2e-helper';

const menu1 = by.css('nga-menu ul li:nth-child(1) a');
const menu2 = by.css('nga-menu ul li:nth-child(2) a');
const menu3 = by.css('nga-menu ul li:nth-child(3) a');
const menu3SubMenu = by.css('nga-menu ul li:nth-child(3) ul');
const menu31 = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(1) a');
const menu32 = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(2) a');
const menu33 = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(3) a');
const menu33SubMenu = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(3) ul');
const menu331 = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(3) ul li:nth-child(1) a');
const menu332 = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(3) ul li:nth-child(2) a');
const menu333 = by.css('nga-menu ul li:nth-child(3) ul li:nth-child(3) ul li:nth-child(3) a');
const menu4 = by.css('nga-menu ul li:nth-child(4) a');
const newMenu = by.css('nga-menu ul li:nth-child(6) a');
const button = by.css('button');

describe('nga-menu', () => {

  beforeEach(() => {
    browser.get('#/menu');
  });

  it('should display menu', () => {
    expect(element(by.css('nga-menu')).isDisplayed()).toBeTruthy();
    expect(browser.getCurrentUrl()).toContain('#/menu/1');
  });

  it('should be selected - Menu #1', () => {
    element.all(menu1).first().getText()
      .then(val => {
        expect(val).toEqual('Menu #1');
      });

    element.all(menu1).first().click()
      .then(() => {
        expect(hasClass(element.all(menu1).first(), 'active')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('#/menu/1');
      });
  });

  it('should be selected - Menu #2', () => {
    element.all(menu2).first().getText()
      .then(val => {
        expect(val).toEqual('Menu #2');
      });

    element.all(menu2).first().click()
      .then(() => {
        expect(hasClass(element.all(menu2).first(), 'active')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('#/menu/2');
      });
  });

  it('should be expanded - Menu #3', () => {
    expect(hasClass(element.all(menu3SubMenu).first(), 'menu-collapsed')).toBeTruthy();

    element.all(menu3).first().getText()
      .then(val => {
        expect(val).toEqual('Menu #3');
      });

    element.all(menu3).first().click()
      .then(() => {
        expect(hasClass(element.all(menu3SubMenu).first(), 'menu-expanded')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('#/menu/1');

        element.all(menu3).first().getText()
          .then(val => {
            expect(val).toEqual('Menu #3');
          });

        element.all(menu3).first().click()
          .then(() => {
            expect(hasClass(element.all(menu3SubMenu).first(), 'menu-collapsed')).toBeTruthy();
            expect(browser.getCurrentUrl()).toContain('#/menu/1');
          });
      });
  });

  it('should be selected - Menu #3.1', () => {
    expect(hasClass(element.all(menu3SubMenu).first(), 'menu-collapsed')).toBeTruthy();

    element.all(menu3).first().click()
      .then(() => {
        element.all(menu31).first().getText()
          .then(val => {
            expect(val).toEqual('Menu #3.1');
          });

        element.all(menu31).first().click()
          .then(() => {
            expect(browser.getCurrentUrl()).toContain('#/menu/3/1');
          });
      });
  });

  it('should be selected - Menu #3.2', () => {
    element.all(menu3).first().click()
      .then(() => {
        element.all(menu32).first().getText()
          .then(val => {
            expect(val).toEqual('Menu #3.2');
          });

        element.all(menu32).first().click()
          .then(() => {
            expect(browser.getCurrentUrl()).toContain('#/menu/3/2');
          });
      });
  });

  it('should be expanded - Menu #3.3', () => {
    element.all(menu3).first().click()
      .then(() => {
        element.all(menu33).first().getText()
          .then(val => {
            expect(val).toEqual('Menu #3.3');
          });

        element.all(menu33).first().click()
          .then(() => {
            expect(hasClass(element.all(menu33SubMenu).first(), 'menu-expanded')).toBeTruthy();
            expect(browser.getCurrentUrl()).toContain('#/menu/1');

            element.all(menu33).first().click()
              .then(() => {
                expect(hasClass(element.all(menu33SubMenu).first(), 'menu-collapsed')).toBeTruthy();
                expect(browser.getCurrentUrl()).toContain('#/menu/1');
              });
          });
      });
  });

  it('should be selected - Menu #3.3.1', () => {
    element.all(menu3).first().click()
      .then(() => {
        element.all(menu33).first().click()
          .then(() => {
            element.all(menu331).first().getText()
              .then(val => {
                expect(val).toEqual('Menu #3.3.1');
              });

            element.all(menu331).first().click()
              .then(() => {
                expect(hasClass(element.all(menu331).first(), 'active')).toBeTruthy();
                expect(browser.getCurrentUrl()).toContain('#/menu/3/3/1');
              });
          });
      });
  });

  it('should be selected - Menu #3.3.2', () => {
    element.all(menu3).first().click()
      .then(() => {
        element.all(menu33).first().click()
          .then(() => {
            element.all(menu332).first().getText()
              .then(val => {
                expect(val).toEqual('Menu #3.3.2');
              });

            element.all(menu332).first().click()
              .then(() => {
                expect(hasClass(element.all(menu332).first(), 'active')).toBeTruthy();
                expect(browser.getCurrentUrl()).toContain('#/menu/3/3/2');
              });
          });
      });
  });

  it('should be selected - Menu #3.3.3', () => {
    element.all(menu3).first().click()
      .then(() => {
        element.all(menu33).first().click()
          .then(() => {
            element.all(menu333).first().getText()
              .then(val => {
                expect(val).toEqual('@nga/theme');
              });

            element.all(menu333).first().click()
              .then(() => {
                expect(hasClass(element.all(menu333).first(), 'active')).toBeTruthy();
                expect(browser.getCurrentUrl()).toContain('#/menu/1');
              });
          });
      });
  });

  it('should be selected - Menu #4', () => {
    element.all(menu4).first().getText()
      .then(val => {
        expect(val).toEqual('Menu #4');
      });

    element.all(menu4).first().click()
      .then(() => {
        expect(hasClass(element.all(menu4).first(), 'active')).toBeTruthy();
        expect(browser.getCurrentUrl()).toContain('#/menu/4');
      });
  });

  it('should add new menu item', () => {
    element(button).click()
      .then(() => {
        element.all(newMenu).first().getText()
          .then(val => {
            expect(val).toEqual('New Menu Item');
          });

        expect(browser.getCurrentUrl()).toContain('#/menu/1');
      });
  });

});
