describe('Página de login', () => {
    beforeEach(() => { // Executado antes de cada teste
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()

        // Intercepta a requisição de login e simula uma resposta de erro
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400
        })
            .as('stubPost')
    })


    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('ana@email.com', 'Senha123')
        // Aguarda a resposta da requisição interceptada e verifica se a mensagem de erro é exibida
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
})