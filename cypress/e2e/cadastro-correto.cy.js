describe('Página de cadastro', () => {
  it('Deve preencher o formulário de cadastro corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type('Ana de Jesus')
    cy.get('[data-test="input-email"]').type('ana@email.com')
    cy.get('[data-test="input-password"]').type('Senha123')
    cy.get('[data-test="input-confirm-password"]').type('Senha123')
    cy.get('[data-test="submit-button"]').click()
  })
}) 

// exercícios
// describe('teste para o site adopet', () => {
//   it('deve carregar a página corretamente e clicar no botão "ver pets disponíveis para a adoção"', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app')
//     cy.get('.button').click()
//   })

//   it("Visita a página de principal do AdoPet e testa os botão de home", () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.get('.header__home').click()
//   })

//   it("Visita a página de principal do AdoPet e testa os botão de mensagens", () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.get('.header__message').click()
//   })

//   it("Visita a página de /login do Adopet", () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/login');
//   })

//   it("Visita a página de /home do Adopet", () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//   })

//   it("Visita a página de /home do Adopet", () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//     cy.contains('a', 'Falar com responsável').click();
//   })
// })