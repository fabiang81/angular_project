import { ProyectoFinalAngular2Page } from './app.po';

describe('proyecto-final-angular2 App', () => {
  let page: ProyectoFinalAngular2Page;

  beforeEach(() => {
    page = new ProyectoFinalAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
