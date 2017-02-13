import { browser, element, by } from 'protractor';

describe('nga-card', () => {
  it('should display text inside nga-card-header', () => {
    browser.get('/');
    expect(element(by.css('#default-card nga-card-header')).getText()).toEqual('HEADER');
  });

  it('should display text inside nga-card-body', () => {
    browser.get('/');
    expect(element(by.css('#default-card nga-card-body')).getText()).toEqual('Body');
  });

  it('should display text inside nga-card-footer', () => {
    browser.get('/');
    expect(element(by.css('#default-card nga-card-footer')).getText()).toEqual('Footer');
  });

  it('should have height equal 193px', () => {
    browser.get('/');
    element(by.css('#small-card')).getSize().then(el => {
      expect(el.height).toEqual(193);
    });
  });

  it('should have height equal 193px', () => {
    browser.get('/');
    element(by.css('#xsmall-card')).getSize().then(el => {
      expect(el.height).toEqual(193);
    });
  });

  it('should have height equal 400px', () => {
    browser.get('/');
    element(by.css('#medium-card')).getSize().then(el => {
      expect(el.height).toEqual(400);
    });
  });

  it('should have height equal 550px', () => {
    browser.get('/');
    element(by.css('#xmedium-card')).getSize().then(el => {
      expect(el.height).toEqual(550);
    });
  });

  it('should have height equal 974px', () => {
    browser.get('/');
    element(by.css('#large-card')).getSize().then(el => {
      expect(el.height).toEqual(974);
    });
  });

  it('should have header with primary color of background and border', () => {
    browser.get('/');
    element(by.css('#primary-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(51, 188, 255, 1)');
    });

    element(by.css('#primary-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(51, 188, 255)');
    });
  });

  it('should have header with success color of background and border', () => {
    browser.get('/');
    element(by.css('#success-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(162, 219, 89, 1)');
    });

    element(by.css('#success-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(162, 219, 89)');
    });
  });

  it('should have header with info color of background and border', () => {
    browser.get('/');
    element(by.css('#info-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(102, 225, 244, 1)');
    });

    element(by.css('#info-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(102, 225, 244)');
    });
  });

  it('should have header with warning color of background and border', () => {
    browser.get('/');
    element(by.css('#warning-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(236, 200, 57, 1)');
    });

    element(by.css('#warning-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(236, 200, 57)');
    });
  });

  it('should have header with danger color of background and border', () => {
    browser.get('/');
    element(by.css('#danger-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(250, 117, 142, 1)');
    });

    element(by.css('#danger-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(250, 117, 142)');
    });
  });
});
