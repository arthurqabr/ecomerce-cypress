/// <reference types='cypress' />

describe('Search bar test', () => {
    beforeEach(() => {
        cy.acessNaveeAutomation();
      });
    
    it('Should type and search a product', () => {
        cy.setProductInSearchBar('macbook')
        cy.get('[name=search]').clear()
        cy.setProductInSearchBar('iphone')
        cy.get('[name=search]').clear()
        cy.setProductInSearchBar('samsung')
    })

    it('Should validate there is no itens matches the search criteria', () => {
        cy.get('#search').type('blablablabla{enter}');
        cy.contains(`Search - blablablabla`);
        cy.contains('There is no product that matches the search criteria.')
    })
})