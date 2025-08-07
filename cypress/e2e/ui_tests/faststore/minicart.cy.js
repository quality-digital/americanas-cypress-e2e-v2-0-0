import devices from '../../../support/utils/devices';

devices.forEach(({ name, viewport, userAgent }) => {
  describe(`Adicionar ao Carrinho via PDP - ${name}`, () => {
    const productName = 'Notebook Lenovo Ideapad 3i Intel Celeron-N4020 4GB 128GB SSD Tela 15,6" Windows 11 - Prata';
    const expectedSku = '3741274';

    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false);

      cy.visit('https://www.americanas.com.br', {
        headers: { 'User-Agent': userAgent },
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'userAgent', { value: userAgent });
        },
      });

      cy.viewport(viewport.width, viewport.height);
      cy.wait(3000);
    });

    it('Deve adicionar item ao carrinho a partir da PDP', () => {
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Aceitar")').length) {
          cy.contains('Aceitar').click({ force: true });
        }
      });

      cy.get('button[data-testid="fs-search-button"]').first().click({ force: true });
      cy.get('input[placeholder*="busque"]')
        .should('be.visible')
        .type(productName, { delay: 100 });
      cy.get('button[data-testid="fs-search-button"]').last().click({ force: true });

      cy.url().should('include', '?q=');

      cy.get(`[data-sku="${expectedSku}"]`, { timeout: 15000 })
        .should('exist')
        .click({ force: true });

      cy.url().should('include', '/p');

      cy.get('h1.ProductInfoCenter_title__hdTX_').should('be.visible');
      cy.get('div.ProductPrice_productPrice__vpgdo').should('contain', 'R$');
      cy.get('[data-testid="buy-button"]').should('be.visible');

      cy.contains(/comprar/i).click({ force: true });

      cy.get('body').then(($body) => {
        if ($body.find('[data-testid="fs-button-variations-success"]').length > 0) {
          cy.get('[data-testid="fs-button-variations-success"]').click({ force: true });
        }
      });

      cy.url().then((url) => {
        if (url.includes('/carrinho')) {
          cy.url().should('include', '/carrinho');
          cy.get('div').should('contain', productName.split(' ')[0]); 
        } else {
          cy.get('[data-testid="fs-cart-sidebar"]', { timeout: 10000 }).should('be.visible');
          cy.get('[data-testid="fs-cart-sidebar"]').should('contain', productName.split(' ')[0]);
        }
      });

      cy.wait(500);
    });
  });
});
