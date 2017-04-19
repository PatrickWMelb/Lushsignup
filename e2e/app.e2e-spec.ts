import { LushSignupNgPage } from './app.po';

describe('lush-signup-ng App', () => {
  let page: LushSignupNgPage;

  beforeEach(() => {
    page = new LushSignupNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
