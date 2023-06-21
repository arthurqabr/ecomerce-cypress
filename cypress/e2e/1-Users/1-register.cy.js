import faker from 'faker';
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const phone = faker.phone.phoneNumber();
describe("New user features", () => {
  beforeEach(() => {
    cy.acessNaveeAutomation();
  });

  it("Creating a new user successfully", () => {
    cy.setNewUserFields(firstName, lastName, email, phone, 'P@ssw0rd', 'P@ssw0rd'); // this is a command in /e2e/support/commands.js
    cy.contains('Your Account Has Been Created!').should('be.visible')
  });

  it("Creating a new user with e-mail address already registered", () => {
    cy.setNewUserFields(firstName, lastName, email, phone, 'P@ssw0rd', 'P@ssw0rd');
    cy.contains('Warning: E-Mail Address is already registered!').should('be.visible')
  });
});
