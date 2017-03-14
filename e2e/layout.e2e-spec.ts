import { browser, element, by } from 'protractor';

describe('nga-layout', () => {

  beforeEach(() => {
    browser.get('#/layout');
  });

  it('should render main-container', () => {
    element(by.css('#layout-fluid > div')).getAttribute('class').then(value => {
      expect(value).toMatch('main-container');
    });
  });

  it('should render container-fluid', () => {
    element(by.css('#layout-fluid > div')).getAttribute('class').then(value => {
      expect(value).toMatch('container-fluid');
    });
  });

  const columns = 3;
  it(`should have ${columns} nga-layout-columns`, () => {
    expect(element(by.css('#layout-fluid > div')).all(by.css('nga-layout-column')).count()).toEqual(columns);
  });

  it('should render left with flex: 1 1 auto', () => {
    element.all(by.css('#layout-fluid > div > nga-layout-column')).get(0).getCssValue('flex').then(value => {
      expect(value).toMatch('1 1 auto');
    });
  });

  it('should render left with order: 1', () => {
    element.all(by.css('#layout-fluid > div > nga-layout-column')).get(0).getCssValue('order').then(value => {
      expect(value).toMatch('1');
    });
  });

  it('should render center with flex: 3 1 auto', () => {
    element.all(by.css('#layout-fluid > div > nga-layout-column')).get(1).getCssValue('flex').then(value => {
      expect(value).toMatch('3 1 auto');
    });
  });

  it('should render center with order: 2', () => {
    element.all(by.css('#layout-fluid > div > nga-layout-column')).get(1).getCssValue('order').then(value => {
      expect(value).toMatch('2');
    });
  });

  it('should render right with flex: 1 1 auto', () => {
    element.all(by.css('#layout-fluid > div > nga-layout-column')).get(2).getCssValue('flex').then(value => {
      expect(value).toMatch('1 1 auto');
    });
  });

  it('should render right with order: 3', () => {
    element.all(by.css('#layout-fluid > div > nga-layout-column')).get(2).getCssValue('order').then(value => {
      expect(value).toMatch('3');
    });
  });

  it('should render container centered', () => {
    element(by.css('#layout-center > div')).getAttribute('class').then(value => {
      expect(value).toMatch('container');
    });
  });


});
