import { browser, element, by } from 'protractor';

describe('nga-card', () => {
  it('should display text inside nga-card-header', () => {
    browser.get('/');
    expect(element(by.css('nga-card nga-card-header')).getText()).toEqual('Header');
  });

  it('should display text inside nga-card-body', () => {
    browser.get('/');
    expect(element(by.css('nga-card nga-card-body')).getText()).toEqual('Body');
  });

  it('should display text inside nga-card-footer', () => {
    browser.get('/');
    expect(element(by.css('nga-card nga-card-footer')).getText()).toEqual('Footer');
  });
});
