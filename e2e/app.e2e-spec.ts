import { OpenBusinessWebpagePage } from './app.po';

describe('open-business-webpage App', function() {
  let page: OpenBusinessWebpagePage;

  beforeEach(() => {
    page = new OpenBusinessWebpagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
