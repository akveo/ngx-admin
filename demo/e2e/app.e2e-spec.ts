import { NgxAdminDemoPage } from './app.po';

describe('ngx-admin-demo App', function() {
  let page: NgxAdminDemoPage;

  beforeEach(() => {
    page = new NgxAdminDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
