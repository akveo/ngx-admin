import { NgaFrameworkDemoPage } from './app.po';

describe('nga-framework-demo App', () => {
  let page: NgaFrameworkDemoPage;

  beforeEach(() => {
    page = new NgaFrameworkDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
