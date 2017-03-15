import { browser, element, by } from 'protractor';

describe('nga-sidebar-two', () => {

  beforeEach(() => {
    browser.get('#/sidebar/two');
  });

  it('should render right fixed sidebar height minus header  & footer', () => {
    Promise.all([
      element(by.css('nga-layout')).getSize(),
      element(by.css('nga-layout-header')).getSize(),
      element(by.css('nga-layout-footer')).getSize(),
      element(by.css('nga-sidebar[fixed]')).getSize()
    ]).then(([layoutSize, headerSize, footerSize, sidebarSize]) => {
      expect(sidebarSize.height).toEqual(layoutSize.height - headerSize.height - footerSize.height);
    });
  });

  it('should render left non-fixed sidebar height minus header & footer', () => {
    Promise.all([
      element(by.css('nga-layout')).getSize(),
      element(by.css('nga-layout-header')).getSize(),
      element(by.css('nga-layout-footer')).getSize(),
      element.all(by.css('nga-sidebar')).get(0).getSize()
    ]).then(([layoutSize, headerSize, footerSize, sidebarSize]) => {
      expect(sidebarSize.height).toEqual(layoutSize.height - headerSize.height - footerSize.height);
    });
  });

  it('should render fixed sidebar with absolute position', () => {
    element(by.css('nga-sidebar[fixed]')).getCssValue('position').then(value => {
      expect(value).toMatch('absolute');
    });
  });

  it('should render fixed right sidebar at right', () => {
    element(by.css('nga-sidebar[right]')).getCssValue('right').then(value => {
      expect(value).toMatch('0');
    });
  });
});
