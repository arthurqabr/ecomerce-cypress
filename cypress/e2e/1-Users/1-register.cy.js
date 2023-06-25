/// <reference types='cypress' />
import faker from 'faker';
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const phone = faker.phone.phoneNumber();
const existingUserEmail = 'arthur.o.carvalho@gmail.com'

describe("New user features", () => {
  beforeEach(() => {
    cy.acessNaveeAutomation();
  });

  it("Should create a random user successfully", () => {
    cy.setNewUserFields(firstName, lastName, email, phone, 'P@ssw0rd', 'P@ssw0rd'); // this is a command in /e2e/support/commands.js
    cy.contains('Your Account Has Been Created!').should('be.visible')
  });

  it("Should create a new user with e-mail address already registered", () => {
    cy.setNewUserFields(firstName, lastName, email, phone, 'P@ssw0rd', 'P@ssw0rd');
    cy.contains('Warning: E-Mail Address is already registered!').should('be.visible')
  });

  it.only("Should validate error messages in input fields", () => {
    cy.setNewUserFields(firstName, lastName, email, phone, 'P@ssw0rd', 'P@ssw0r');
    cy.contains('Password confirmation does not match password!').should('be.visible')
    cy.get('#input-firstname').clear(); // Limpa o valor existente e digita uma string vazia
    cy.get('#input-lastname').clear();
    cy.get('#input-email').clear();
    cy.get('#input-telephone').clear();
    cy.contains('Continue').click()
    cy.contains('First Name must be between 1 and 32 characters!').should('be.visible')
    cy.contains('Last Name must be between 1 and 32 characters!').should('be.visible')
    cy.contains('E-Mail Address does not appear to be valid!').should('be.visible')
    cy.contains('Telephone must be between 3 and 32 characters!').should('be.visible')
  });

  it('Should create a default user', () => {
    cy.setNewUserFields('Arthur', 'Carvalho', existingUserEmail, '31992811966', 'P@ssw0rd', 'P@ssw0rd');
  });
  
  
});
