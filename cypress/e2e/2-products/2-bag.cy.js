/// <reference types='cypress' />

describe('Cart features', () => {

    beforeEach(() => {
    cy.acessNaveeAutomation();
  });

  it('Should open product, validate item details, add to cart and validade total value', () => {
    cy.addItemBag('macbook') // ATENÇÃO: verifique o log do cypress na execução deste "it" 
    cy.addItemBag('samsung')
    cy.addItemBag('iphone') 
    cy.getCartTotalIcon()    // verifica o total no ícone do carrinho
    cy.getCartTotal()        // verifica o total dentro do carrinho

  });

});
