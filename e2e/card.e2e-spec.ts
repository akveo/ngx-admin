import { browser, element, by } from 'protractor';

describe('nga-card', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display text inside nga-card-header', () => {
    expect(element(by.css('nga-card:nth-child(1) > nga-card-header')).getText()).toEqual('HEADER');
  });

  it('should display text inside nga-card-body', () => {
    expect(element(by.css('nga-card:nth-child(1) > nga-card-body')).getText()).toEqual('Body');
  });

  it('should display text inside nga-card-footer', () => {
    expect(element(by.css('nga-card:nth-child(1) > nga-card-footer')).getText()).toEqual('Footer');
  });

  it('should have height equal 161px', () => {
    element(by.css('nga-card:nth-child(2)')).getSize().then(el => {
      expect(el.height).toEqual(161);
    });
  });

  it('should have height equal 187px', () => {
    element(by.css('nga-card:nth-child(3)')).getSize().then(el => {
      expect(el.height).toEqual(187);
    });
  });

  it('should have height equal 400px', () => {
    element(by.css('nga-card:nth-child(4)')).getSize().then(el => {
      expect(el.height).toEqual(400);
    });
  });

  it('should have height equal 550px', () => {
    element(by.css('nga-card:nth-child(5)')).getSize().then(el => {
      expect(el.height).toEqual(550);
    });
  });

  it('should have height equal 974px', () => {
    element(by.css('nga-card:nth-child(6)')).getSize().then(el => {
      expect(el.height).toEqual(974);
    });
  });

  it('should have header with primary color of background and border', () => {
    element(by.css('nga-card:nth-child(7) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(0, 171, 255, 1)');
    });

    element(by.css('nga-card:nth-child(7) > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(0, 171, 255)');
    });
  });

  it('should have header with success color of background and border', () => {
    element(by.css('nga-card:nth-child(8) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(139, 210, 47, 1)');
    });

    element(by.css('nga-card:nth-child(8) > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(139, 210, 47)');
    });
  });

  it('should have header with info color of background and border', () => {
    element(by.css('nga-card:nth-child(9) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(64, 218, 241, 1)');
    });

    element(by.css('nga-card:nth-child(9) > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(64, 218, 241)');
    });
  });

  it('should have header with warning color of background and border', () => {
    element(by.css('nga-card:nth-child(10) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(231, 186, 8, 1)');
    });

    element(by.css('nga-card:nth-child(10) > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(231, 186, 8)');
    });
  });

  it('should have header with danger color of background and border', () => {
    element(by.css('nga-card:nth-child(11) > nga-card-header')).getCssValue('background-color').then(bgColor => {
      expect(bgColor).toEqual('rgba(249, 83, 114, 1)');
    });

    element(by.css('nga-card:nth-child(11) > nga-card-header')).getCssValue('border-color').then(bgColor => {
      expect(bgColor).toEqual('rgb(249, 83, 114)');
    });
  });
});
