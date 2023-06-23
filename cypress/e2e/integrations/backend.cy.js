/// <reference types='cypress' />
import faker from 'faker';


describe("Should test API", () => {

  it("should create a new user", function () {
    cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            Authorization: 'Bearer 6916c4726abd10bcc789b6c10f5e372da8b2e60b846ca1b192cf83cd74da2616'
        },
        body: {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            gender: 'female',
            status: 'active'
        }
    }).then(res => {
        expect(res.status).to.eq(201)
    })
     .then(res => console.log(res))
  
  });

  it("Shoud make a GET method", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
    }).then(res => {
        expect(res.status).to.eq(200)
    })
  });
});
