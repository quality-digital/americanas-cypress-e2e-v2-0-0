import devices from '../../../support/utils/devices';

devices.forEach(({ name, viewport, userAgent }) => {
  describe(`Adicionar ao Carrinho e validar produto dentro dele – ${name}`, () => {
    const productName =
      'Notebook Lenovo Ideapad 3i Intel Celeron-N4020 4GB 128GB SSD Tela 15,6" Windows 11 – Prata';

    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      Cypress.on('uncaught:exception', () => false);

      cy.visit('https://www.americanas.com.br', {
        headers: { 'User-Agent': userAgent },
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'userAgent', {
            value: userAgent,
          });
        },
      });

      cy.viewport(viewport.width, viewport.height);
      cy.wait(3000);
    });

    it('Deve buscar produto, adicionar ao carrinho e validar mini-carrinho', () => {
      cy.get('body').then($b => {
        if ($b.find('button:contains("Aceitar")').length) {
          cy.contains('Aceitar').click({ force: true });
        }
      });

      cy.get('button[data-testid="fs-search-button"]').first().click({ force: true });
      cy.get('input[placeholder*="busque"]')
        .should('be.visible')
        .type(productName, { delay: 100 });
      cy.get('button[data-testid="fs-search-button"]').last().click({ force: true });
      cy.url().should('include', '?q=');

      cy.get('[data-sku]').first().click({ force: true });
      cy.url().should('include', '/p');

      cy.get('h1.ProductInfoCenter_title__hdTX_').should('be.visible');
      cy.get('div.ProductPrice_productPrice__vpgdo').should('contain', 'R$');
      cy.get('[data-testid="buy-button"]').should('be.visible').click({ force: true });

      cy.get('body').then($b => {
        if ($b.find('[data-testid="fs-button-variations-success"]').length) {
          cy.get('[data-testid="fs-button-variations-success"]').click({ force: true });
        }
      });

      cy.get('[data-testid="fs-cart-sidebar"]', { timeout: 10000 }).should('be.visible');
      cy.get('[data-testid="fs-cart-item-summary"]').should('be.visible');
      cy.get('[data-testid="fs-product-price"]').should('contain', 'R$');
      cy.get('[data-testid="fs-input"]').should('be.visible');

      cy.wait(500);
    });
  });
});
