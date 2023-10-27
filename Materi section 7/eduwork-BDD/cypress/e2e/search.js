const {Given, When, Then,}= require("@badeball/cypress-cucumber-preprocessor");
Given ('I am on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com')
});
When ('I click the search bar in the upper right corner of the page', () => {
    cy.get("#searchTerm").click()
});
When  ('I type the word "online"', () => {
    cy.get("#searchTerm").type('online').clear()
});
When ('I press the Enter key', () => {
    cy.get("#searchTerm").type('online {enter}')
});
Then ('I should see results related to the word "online"', () => {
    cy.get('.top_offset').should('contain','online')
});