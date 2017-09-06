import { Bug.TrackerPage } from './app.po';

describe('bug.tracker App', () => {
  let page: Bug.TrackerPage;

  beforeEach(() => {
    page = new Bug.TrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
