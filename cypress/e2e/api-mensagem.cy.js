describe('API adopet', () => {
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: Cypress.env() // pega o authorization token de ambiente do cypress.env.json 
        })
            // Receber a resposta da API e validar o status e o corpo da resposta
            .then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg')
 //             expect(res.duration).to.be.lte(2000) só o exemplo da aula sobre tempo de resposta, mas não é uma boa prática validar o tempo de resposta em testes automatizados, pois pode variar dependendo do ambiente e da carga do servidor. 
            })
    })
})

// cypress tem ferramentas no plano pago para flaky tests (testes que falham de forma intermitente):
// test retries
// flaky test management

// a melhor abordagem para evitar Flaky testes ao testar a funcionalidade de busca de livros:
// Adicionar verificações explícitas para elementos específicos da página usando cy.get('.search-result').should('be.visible') antes de prosseguir com os testes.
// Isso garante que os testes só prossigam quando os elementos necessários estiverem visíveis e prontos para interação.


// npx cypress run --spec "cypress\e2e\api-mensagem.cy.js" - rodar somente no terminal