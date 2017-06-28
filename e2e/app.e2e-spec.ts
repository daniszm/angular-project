import { AngularSzkoleniePage } from './app.po';

describe('angular-szkolenie App', () => {
  let page: AngularSzkoleniePage;

  beforeEach(() => {
    page = new AngularSzkoleniePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
