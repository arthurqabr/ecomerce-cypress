/// <reference types="cypress" />

Cypress.Commands.add("acessNaveeAutomation", () => {
  cy.visit("/");
  // Cypress.on(
  //     "uncaught:exception", (err, runnable) => true
  // );
}); //Função realiza acesso a plataforma(tratando erros)

Cypress.Commands.add("setLoginData", (email, password) => {
  cy.get(".caret").click();
  cy.contains("Login").click();
  cy.url().should("include", "index.php?route=account/login");
  cy.contains("Returning Customer").should("be.visible");
  cy.get("#input-email").type(email);
  cy.get("#input-email").should("have.value", email);
  cy.get("#input-password").type(password);
  cy.get("#input-password").should("have.value", password);
  cy.get("[type=submit][value=Login]").click();
});

Cypress.Commands.add(
  "setNewUserFields",
  (firstName, lastName, email, phone, password, confPassword) => {
    cy.get(".caret").click();
    cy.contains("Register").click();
    cy.contains("Register Account").should("be.visible");
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(phone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(confPassword);
    cy.get("label input[type='radio']").check("1", { force: true });
    cy.get('[type="checkbox"], [name="agree"]').check("1");
    cy.log("------/ Assertions /------");
    cy.get("#input-firstname").should("have.value", firstName);
    cy.get("#input-lastname").should("have.value", lastName);
    cy.get("#input-email").should("have.value", email);
    cy.get("#input-telephone").should("have.value", phone);
    cy.get("#input-password").should("have.value", password);
    cy.get("#input-confirm").should("have.value", confPassword);
    cy.get("label input[type='radio'][value='1']").should("be.checked");
    cy.get('[type="checkbox"], [name="agree"]').should("be.checked");
    cy.contains("Continue").click();
  }
);

Cypress.Commands.add("setProductInSearchBar", (item) => {
  cy.get("#search").type(`${item}{enter}`);
  cy.contains(`Search - ${item}`);
  cy.get("div [class=row]:eq(4)").contains(item, { matchCase: false });
});

let productName;
let productPrice;
Cypress.Commands.add("addItemBag", (item) => {
  cy.setProductInSearchBar(item);
  cy.get("div [class=row]:eq(4) a:eq(1)").click();
  cy.contains("Description").should("be.visible");
  cy.contains("Reviews").should("be.visible");
    cy.get("h1")
      .invoke("text")
      .then((prodName) => {
        productName = prodName;
      });
    cy.get("li h2")
      .invoke("text")
      .then((pricProd) => {
        productPrice = pricProd.replace(/\$|\s/g, "");
      });
  cy.wrap(null).then(() => {
    console.log(productName, productPrice);
    cy.log(`**Product Name: ${productName}**`);
    cy.log(`**Product Price: $${productPrice}**`);
  });
  cy.wrap(null).then(() => {
    cy.get("#button-cart").click();
    cy.contains(`Success: You have added ${productName} to your shopping cart!`);
    cartTotal += parseFloat(productPrice)
    cartTotal = Number(cartTotal.toFixed(2));
  })
  cy.get('[name=search]').clear()
});

let cartTotal = 0;
Cypress.Commands.add("getCartTotalIcon", () => {
    console.log(`Valor total: ${cartTotal}`)
    cy.get('#cart-total').contains(cartTotal)
  });

Cypress.Commands.add("getCartTotal", () => {
    cy.get('#cart-total').click()
    cy.contains('View Cart').click()
    cy.get('table[class="table table-bordered"]:eq(2)').contains(cartTotal)
  });
  


