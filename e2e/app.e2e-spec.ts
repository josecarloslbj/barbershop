import { BarbershopPage } from './app.po';

describe('barbershop App', () => {
  let page: BarbershopPage;

  beforeEach(() => {
    page = new BarbershopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
