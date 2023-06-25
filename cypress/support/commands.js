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

Cypress.Commands.add('setLoginData', (email, password) =>{
    cy.get('.caret').click()
    cy.contains('Login').click()
    cy.url().should('include', 'index.php?route=account/login');
    cy.contains('Returning Customer').should('be.visible')
    cy.get('#input-email').type(email)
    cy.get('#input-email').should('have.value', email)
    cy.get('#input-password').type(password)
    cy.get('#input-password').should('have.value', password)
    cy.get('[type=submit][value=Login]').click()
})

Cypress.Commands.add('setNewUserFields', (firstName, lastName, email, phone, password, confPassword) =>{
    cy.get(".caret").click();
    cy.contains("Register").click();
    cy.contains("Register Account").should("be.visible");
    cy.get('#input-firstname').type(firstName)
    cy.get('#input-lastname').type(lastName)
    cy.get('#input-email').type(email)
    cy.get('#input-telephone').type(phone)
    cy.get('#input-password').type(password)
    cy.get('#input-confirm').type(confPassword)
    cy.get("label input[type='radio']").check('1', { force: true });
    cy.get('[type="checkbox"], [name="agree"]').check('1')
    cy.log('------/ Assertions /------')
    cy.get('#input-firstname').should('have.value', firstName)
    cy.get('#input-lastname').should('have.value', lastName)
    cy.get('#input-email').should('have.value', email)
    cy.get('#input-telephone').should('have.value', phone)
    cy.get('#input-password').should('have.value', password)
    cy.get('#input-confirm').should('have.value', confPassword)
    cy.get("label input[type='radio'][value='1']").should('be.checked')
    cy.get('[type="checkbox"], [name="agree"]').should('be.checked')
    cy.contains('Continue').click()
})