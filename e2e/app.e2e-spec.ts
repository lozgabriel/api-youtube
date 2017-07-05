import { ApiYoutubePage } from './app.po';

describe('api-youtube App', () => {
  let page: ApiYoutubePage;

  beforeEach(() => {
    page = new ApiYoutubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
