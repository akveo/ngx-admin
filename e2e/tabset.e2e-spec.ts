import { browser, element, by } from 'protractor';

describe('nga-tabset', () => {
  beforeEach(() => {
    browser.get('#/tabset');
  });

  it('should display default tabset', () => {
    expect(element(by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(1)')).getText()).toEqual('Title #1');
    expect(element(by.css('nga-tabset:nth-child(1) > nga-tab[tabTitle="Title #1"] > div > span'))
      .getText()).toEqual('Content #1');

    expect(element(by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(2)')).getText()).toEqual('Title #2');
    expect(element(by.css('nga-tabset:nth-child(1) > ul.nga-tabset > li:nth-child(3)')).getText()).toEqual('Title #3');
  });
});
