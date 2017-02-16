import { Dashboard } from './../po/dashboard.po';
import { browser } from 'protractor';

describe('Dashboard page', () => {
  let page: Dashboard;

  beforeEach(() => {
    page = new Dashboard();
    page.navigateTo();
    page.disableCss();
  });
  it('url should contain "dashboard"', () => {
    expect(browser.getCurrentUrl()).toContain('dashboard');
  });
});
