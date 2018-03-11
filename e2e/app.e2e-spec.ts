import { DeveloperPage } from './app.po';

describe('developer App', () => {
  let page: DeveloperPage;

  beforeEach(() => {
    page = new DeveloperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
