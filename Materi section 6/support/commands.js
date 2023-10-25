// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('userlogin', (username) => {
    cy.visit("https://www.saucedemo.com/v1/");
    cy.fixture("saucedemo").then( saucedemo =>{
        const usernames = saucedemo.username[0]
        const pass = saucedemo.password
        cy.get("[data-test='username']").type(usernames)
        cy.get("[data-test='password']").type(pass)
        cy.get("#login-button").click();
        cy.location("href").should("eq", "https://www.saucedemo.com/v1/inventory.html");
    })
})
// Cypress.Commands.addAll({
//   login(email, pw) {},
//   visit(orig, url, options) {},
// })