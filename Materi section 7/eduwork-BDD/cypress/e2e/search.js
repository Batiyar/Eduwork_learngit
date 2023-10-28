const {Given, When, Then,}= require("@badeball/cypress-cucumber-preprocessor");
Given ('I am on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com')
});
//POSITIVE TEST
When ('I click the search bar in the upper right corner of the page', () => {
    cy.get("#searchTerm").click()
});
When  ('I type the word "online"', () => {
    cy.get("#searchTerm").type('online').clear()
});
When ('I press the Enter button', () => {
    cy.get("#searchTerm").type('online {enter}')
});
Then ('I should see results related to the word "online"', () => {
    cy.get('.top_offset').should('contain','online')
});
//NEGATIVE TEST
Given ('I am already on the homepage', () => {
    cy.visit('http://zero.webappsecurity.com')
});
When ('I click the search bar in homepage', () => {
    cy.get("#searchTerm").click()
});
When('I type the random word that not exist in website and enter it', () => {
    cy.get("#searchTerm").type('saya seorang QA {enter}')
}); 
Then('I should see result not found in website', () => {
    cy.get('.top_offset').should('contain', 'No results were found for the query:')
});