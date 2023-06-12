describe('Create a new user', () => {
    beforeEach(() => {
      cy.visit('/')
    });
  
    it('Login successfully', function () {
      cy.fixture('standardUserData').then((standardUser) => {
        cy.get('#user-name').type(standardUser.username);
        cy.fixture('password').then((password) => {
          cy.get('#password').type('secretsauce');
          cy.get('#login-button').click();
        });
      });
    });
  });
  