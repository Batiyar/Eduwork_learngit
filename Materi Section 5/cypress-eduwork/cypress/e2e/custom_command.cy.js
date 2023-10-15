describe('Authentication', () => {
  it('Should able to input data required', () => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()
    cy.fixture("user").then(user =>{
      const username = user.username
      const password = user.password
      cy.get('#user_login').click().type(username)
      cy.get('#user_password').click().type(password)
    })
    cy.get('.btn-primary').click()
    cy.get('a').contains('Pay Bills').click()
    cy.isiData()
    ;
  })
})