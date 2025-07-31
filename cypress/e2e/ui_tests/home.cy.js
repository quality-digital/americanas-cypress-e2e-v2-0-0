describe('Home da Americanas', () => {
  it('deve verificar se a logo principal está presente no header', () => {
    cy.visit('https://www.americanas.com.br/')

    cy.get('header [data-testid="icon"]').should('exist')

    cy.title().should('include', 'Americanas')
  })
})
