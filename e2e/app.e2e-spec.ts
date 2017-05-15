import { RestAngularPage } from './app.po';

describe('rest-angular App', () => {
  let page: RestAngularPage;

  beforeEach(() => {
    page = new RestAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
