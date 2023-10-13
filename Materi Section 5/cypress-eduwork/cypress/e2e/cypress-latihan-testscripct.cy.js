describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io'),
    cy.pause(),
    cy.contains('type').click(),
    cy.url().should('include','/commands/actions'),
    cy.get('[id="email1"]').type('bachtiarahmad6969@gmail.com').should('have.value','bachtiarahmad6969@gmail.com');
  })
})