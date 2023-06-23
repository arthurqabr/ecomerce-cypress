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
      .then((res) => console.log(res));
  });

  it('shoud delete the user created before', () => {
    cy.request({
      method: "DELETE",
      url: `https://gorest.co.in/public/v2/users/${createdUserId}`,
      headers: {
        Authorization:
          "Bearer 6916c4726abd10bcc789b6c10f5e372da8b2e60b846ca1b192cf83cd74da2616",
      },
      body: {
        id: createdUserId
      }
    }).then((res) => {
      console.log(res)
      expect(res.status).to.eq(204)
      cy.log(`StatusText: ${res.statusText}`)
    })
  })
  
});
