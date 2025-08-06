import devices from '../../../support/utils/devices';

const productName = 'Notebook Lenovo Ideapad 3i Intel Celeron-N4020 4GB 128GB SSD Tela 15,6" Windows 11 - Prata';
const expectedSku = '3741274';

devices.forEach(({ name, viewport, userAgent }) => {
  describe(`Busca de Produto na Americanas - ${name}`, () => {
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

    it('Deve abrir o header, buscar produto e validar resultado', () => {
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Aceitar")').length) {
          cy.contains('Aceitar').click({ force: true });
        }
      });

      cy.scrollTo('top');

      cy.get('button[data-testid="fs-search-button"]')
        .first()
        .should('exist')
        .click({ force: true });

      cy.get('input[placeholder*="busque"]', { timeout: 10000 })
        .should('be.visible')
        .type(productName, { delay: 100 });

      cy.get('button[data-testid="fs-search-button"]')
        .last()
        .click({ force: true });

      cy.url().should('include', '?q=');

      cy.get(`[data-sku="${expectedSku}"]`, { timeout: 15000 }).should('exist');
    });

    after(() => {
      cy.wait(2000);
    });
  });
});
