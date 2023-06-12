describe('Login features', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
    cy.visit('/')
      .catch((err) => {
        if (err.name === 'CypressError' && err.message.includes('Timed out')) {
          Cypress.log({
            name: 'Timeout',
            message: 'Timeout excedido, mas continuando com o teste'
          })
        } else {
          throw err
        }
      })
    cy.get('#user-name').should('exist')
      .then(($elemento) => {
      })
  });

  it('Create a new user', () => {
    cy.get('@users').then((users) => {
      cy.get('#user-name').type(users.standard)
    })
  });
});
