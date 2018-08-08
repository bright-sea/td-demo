import { TdDemoPage } from './app.po';

describe('td-demo App', function() {
  let page: TdDemoPage;

  beforeEach(() => {
    page = new TdDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
