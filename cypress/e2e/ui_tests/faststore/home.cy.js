const devices = [
  {
    name: 'Desktop',
    width: 1440,
    height: 900,
    userAgent: null, 
  },
  {
    name: 'iPhone 16 Pro Max',
    width: 430,
    height: 932,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  },
  {
    name: 'Samsung Galaxy S23',
    width: 393,
    height: 852,
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36',
  },
];

devices.forEach(({ name, width, height, userAgent }) => {
  context(`🏁 Testando em: ${name}`, () => {
    beforeEach(() => {
      cy.viewport(width, height);
 
      if (userAgent) {
        cy.visit('https://www.americanas.com.br/', {
          onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'userAgent', {
              value: userAgent,
            });
          },
        });
      } else {
        cy.visit('https://www.americanas.com.br/');
      }

      cy.wait(5000);
    });

    it('deve exibir a logo da Americanas no header', () => {
      cy.get('header [data-testid="icon"]').should('exist');
      cy.title().should('include', 'Americanas');
    });
  });
});
