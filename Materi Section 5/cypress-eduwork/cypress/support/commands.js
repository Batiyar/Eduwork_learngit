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
Cypress.Commands.add('isiData', () => {
    //cy.clearCookies()
    //cy.clearLocalStorage()
    cy.get('#sp_payee').select('Bank of America') //untuk memilih pada dropdown
    cy.get('#sp_account').select('Loan')
    cy.get('#sp_amount').click().type(1200)
    cy.get('#sp_date').click().get('.ui-state-default').contains('4').click()
    cy.get('#sp_description').click().type('Aku belum mandi nanti sore mandi')
    cy.url().should('include', 'bank/pay-bills.html')
    ;
})