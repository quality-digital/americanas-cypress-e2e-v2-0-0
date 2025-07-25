describe('Página inicial da Americanas', () => {
  it('deve carregar a home corretamente', () => {
    cy.visit('https://www.americanas.com.br')
    cy.get('header').should('exist')
  })
})
