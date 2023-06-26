/// <reference types='cypress' />

describe("Login test", () => {
  beforeEach(() => {
    cy.acessNaveeAutomation();
  });

  it("Should make a successfuly login", () => {
    cy.setLoginData('arthur.o.carvalho@gmail.com', 'P@ssw0rd')
    cy.contains('My Account').should('be.visible')
  });

  it("Should validate error messages in input fields", () => {
    cy.setLoginData('arthur.o.carvalho@gmail.c', 'P@ssw0rd')
    cy.contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
  });
});
