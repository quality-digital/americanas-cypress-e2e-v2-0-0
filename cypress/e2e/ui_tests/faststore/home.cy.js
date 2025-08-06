import devices from '../../../support/utils/devices';

devices.forEach(({ name, viewport, userAgent }) => {
  describe(`Home da Americanas - ${name}`, () => {
    beforeEach(() => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('https://www.americanas.com.br', {
        headers: {
          'User-Agent': userAgent,
        },
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'userAgent', {
            value: userAgent,
          });
        }
      });
      cy.wait(2000);
    });

    it('deve verificar se a logo principal está presente no header', () => {
      cy.get('header [data-testid="icon"]', { timeout: 10000 }).should('exist');
      cy.title().should('include', 'Americanas');
    });

    after(() => {
      cy.wait(1000);
    });
  });
});
