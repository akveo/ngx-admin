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
      expect(bgColor).toEqual('rgba(77, 196, 255, 1)');
    });

    element(by.css('#primary-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(77, 196, 255)');
    });
  });

  it('should have header with success color of background and border', () => {
    browser.get('/');

    element(by.css('#success-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(174, 224, 109, 1)');
    });

    element(by.css('#success-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(174, 224, 109)');
    });
  });

  it('should have header with info color of background and border', () => {
    browser.get('/');

    element(by.css('#info-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(121, 229, 245, 1)');
    });

    element(by.css('#info-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(121, 229, 245)');
    });
  });

  it('should have header with warning color of background and border', () => {
    browser.get('/');

    element(by.css('#warning-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(238, 207, 82, 1)');
    });

    element(by.css('#warning-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(238, 207, 82)');
    });
  });

  it('should have header with danger color of background and border', () => {
    browser.get('/');

    element(by.css('#danger-card > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(251, 135, 156, 1)');
    });

    element(by.css('#danger-card > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(251, 135, 156)');
    });
  });
});
