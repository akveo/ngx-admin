/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { browser, element, by } from 'protractor';

describe('nga-user', () => {

  beforeEach(() => {
    browser.get('#/user');
  });

  // fit('should render main-container', () => {
  //   element(by.css('nga-user:nth-child(0) > .user-container > .background')).getText().then(value => {
  //     expect(value).toMatch('D N');
  //   });
  // });

});
