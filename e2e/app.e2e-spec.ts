import { Ng2AdminCLIPage } from './app.po';

describe('ng2-admin-cli App', () => {
  let page: Ng2AdminCLIPage;

  beforeEach(() => {
    page = new Ng2AdminCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
