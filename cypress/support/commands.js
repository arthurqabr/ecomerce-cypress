/// <reference types="cypress" />
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

Cypress.Commands.add('acessNaveeAutomation', () => {

    cy.visit('/');
    // Cypress.on(
    //     "uncaught:exception", (err, runnable) => true
    // );
});//Função realiza acesso a plataforma(tratando erros)

Cypress.Commands.add('setNewUserFields', (firstName, lastName, email, phone) =>{
    cy.get(".caret").click();
    cy.contains("Register").click();
    cy.contains("Register Account").should("be.visible");
    cy.get('#input-firstname').type(firstName)
    cy.get('#input-lastname').type(lastName)
    cy.get('#input-email').type(email)
    cy.get('#input-telephone').type(phone)
    cy.get('#input-password').type('P@ssw0rd')
    cy.get('#input-confirm').type('P@ssw0rd')
    cy.log('------completed data------')
    cy.get("label input[type='radio']").check('1', { force: true });
    cy.get('[type="checkbox"]').check('1')
    cy.get('[type="checkbox"]').should('be.checked')
    cy.contains('Continue').click()
    cy.contains('Your Account Has Been Created!').should('be.visible')
})