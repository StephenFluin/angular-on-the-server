import { AngularOnTheServerPage } from './app.po';

describe('angular-on-the-server App', () => {
  let page: AngularOnTheServerPage;

  beforeEach(() => {
    page = new AngularOnTheServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
