describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://uitestingplayground.com/');
    cy.get('[href="/textinput"]').click(), // Perhatikan penggunaan tanda kurung siku di sekitar pemilih
    cy.get('[id="newButtonName"]').click().type('Hello, World!'),
    cy.get('[id="updatingButton"]').click(),
    cy.visit('http://uitestingplayground.com/');
    cy.get('[href="/mouseover"]').click(),
    cy.get('[class="text-primary"]').click();
  })
})