
Cypress.Commands.add('login', (email, password) => { 
    cy.get('[data-test="input-loginEmail"]').type(email)
    cy.get('[data-test="input-loginPassword"]').type(password)
    cy.get('[data-test="submit-button"]').click()
 })

// Page Objects = padrão é muito utilizado com a ferramenta Selenium, pois ajuda a dividir e organizar o código.
// Todavia, sua aplicação com Cypress deve ser analisada com cautela para identificar a necessidade real, pois é comum que o uso do recurso de comandos personalizados (commands.js) seja o suficiente para atender as demandas de organização.

// Quando se trata de boas práticas, a ideia é usar Page Objects somente quando for realmente necessário, porque é um recurso mais complexo e caso não esteja bem organizado, a manutenção pode se tornar mais difícil.

// Normalmente a aplicação de page objects é realizada em projetos gigantes com muitas páginas e elementos.



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })