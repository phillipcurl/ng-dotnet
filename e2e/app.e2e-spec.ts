import { NgDotnetPage } from './app.po';

describe('ng-dotnet App', () => {
  let page: NgDotnetPage;

  beforeEach(() => {
    page = new NgDotnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
