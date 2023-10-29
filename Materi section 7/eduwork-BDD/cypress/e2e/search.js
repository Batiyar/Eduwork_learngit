import searchProsses from "./search.page";
const {Given, When, Then,}= require("@badeball/cypress-cucumber-preprocessor");
Given ('I am on the homepage', () => {
    searchProsses.visit()
});
//POSITIVE TEST
When ('I click the search bar in the upper right corner of the page', () => {
    searchProsses.searchColumn()
});
When ('I type the word inside it and press the Enter button', () => {
    cy.get("#searchTerm").type('online {enter}')
});
Then ('I should see results related to the word "online"', () => {
    searchProsses.result().should('contain','online')
});
//NEGATIVE TEST
Given ('I am already on the homepage', () => {
    searchProsses.visit()
});
When ('I click the search bar in homepage', () => {
    searchProsses.searchColumn()
});
When('I type the random word that not exist in website and enter it', () => {
    cy.get("#searchTerm").type('saya seorang QA {enter}')
});
Then('I should see result not found in website', () => {
    searchProsses.result().should('contain', 'No results were found for the query:')
});