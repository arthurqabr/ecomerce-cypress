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
    cy.setNewUserFields(firstName, lastName, email, phone); // this is a command in /e2e/support/commands.js
  });
});
