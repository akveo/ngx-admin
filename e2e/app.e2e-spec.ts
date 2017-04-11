/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgaDemoPage } from './app.po';

describe('nga-demo App', () => {
  let page: NgaDemoPage;

  beforeEach(() => {
    page = new NgaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
