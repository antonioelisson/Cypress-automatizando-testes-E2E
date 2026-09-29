describe('Página de login', () => {
    beforeEach(() => { // Executado antes de cada teste
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
    })


  it('Deve permitir que um usuário se autentique com credenciais válidas', () => {
    cy.login('ana@email.com', 'Senha123')
  })
})