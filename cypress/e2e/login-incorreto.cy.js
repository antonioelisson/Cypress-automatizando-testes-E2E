describe('Página de login', () => {
    beforeEach(() => { // Executado antes de cada teste
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
    })


    it('Deve exibir mensagens de erro para credenciais inválidas', () => {
        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
    })

    it('Deve exibir mensagem de erro para email inválido', () => {
        cy.get('[data-test="input-loginEmail"]').type('emailinvalido')
        cy.get('[data-test="input-loginPassword"]').type('Senha123')
        cy.get('[data-test="submit-button"]').click()
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
    })

    it('Deve exibir mensagem de erro para senha incorreta', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
        cy.get('[data-test="input-loginPassword"]').type('SenhaIncorreta')
        cy.get('[data-test="submit-button"]').click()
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })
})