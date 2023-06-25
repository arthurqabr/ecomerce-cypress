/// <reference types='cypress' />
import faker from "faker";

const name = faker.name.firstName();
const email = faker.internet.email();
let createdUserId;

describe("Should test API", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("should create a new user", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 6916c4726abd10bcc789b6c10f5e372da8b2e60b846ca1b192cf83cd74da2616",
      },
      body: {
        name: name,
        email: email,
        gender: "female",
        status: "active",
      },
    })
      .then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.id).to.be.a("number");
        expect(res.body.id).not.to.be.a("null");
        expect(res.body.name).to.eq(name);
        expect(res.body.email).to.eq(email);
        createdUserId = res.body.id;
      })
      .then((res) => {
        console.log(res);
        console.log(createdUserId)
      })
  });

  it("should get user details by random ID", () => { // Os dados do usuário estarão disponíveis no CONSOLE do navegador.
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer 6916c4726abd10bcc789b6c10f5e372da8b2e60b846ca1b192cf83cd74da2616",
      },
    }).then((res) => {
      expect(res.status).to.eq(200); 
  
      const users = res.body; 
      expect(users).to.not.be.empty; 
  
      const randomUser = Cypress._.sample(users); 
  
      const userId = randomUser.id; 
  
      expect(userId).to.not.be.null; 
  
      cy.log(`User ID: ${userId}`); 
  
      cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        headers: {
          Authorization:
            "Bearer 6916c4726abd10bcc789b6c10f5e372da8b2e60b846ca1b192cf83cd74da2616",
        },
      }).then((res) => {
        expect(res.status).to.eq(200); 
        expect(res.body.id).to.eq(userId);
        cy.log(`Random user Data with ID **${userId}** avaliable in console. Press F12 or Inspect browser`)
        console.log(res.body) 
      });
    });
  });
  

  it("shoud delete the user created before", () => {
    cy.request({
      method: "DELETE",
      url: `https://gorest.co.in/public/v2/users/${createdUserId}`,
      headers: {
        Authorization:
          "Bearer 6916c4726abd10bcc789b6c10f5e372da8b2e60b846ca1b192cf83cd74da2616",
      },
      body: {
        id: createdUserId,
      },
    }).then((res) => {
      console.log(res);
      expect(res.status).to.eq(204);
      cy.log(`StatusText: ${res.statusText}`);

      cy.log('------ Getting the status 404 with new GET in the deleted user -----')
      cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/users/${createdUserId}`,
        failOnStatusCode: false,
      }).then((resDel => {
        expect(resDel.status).to.eq(404)
        cy.log('404 not found. The user has been deleted successfuly')
      }))
    });

  });
});
