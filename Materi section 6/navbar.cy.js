describe('Testing navigasi bar', function (){
    beforeEach(()=> {
        cy.visit('http://zero.webappsecurity.com/')
    })
    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        //assertion tugas
        cy.get('#nav').should('contain','Home').and('contain', 'Online Banking').and('contain', 'Feedback')
    });
    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        //assertion tugas
        cy.get('h3').should('contain', 'Feedback').and('have.css','font-size', '24.5px')
        cy.get('#description p').should('contain', "Our Frequently Asked Questions area will help you with many")
        cy.get('.span6 form').should('have.attr', 'action', '/sendFeedback.html');
        cy.get('input[name="submit"]').should('exist').and('be.enabled')
        cy.get('input[name="clear"]').should('exist').and('be.enabled');
        ;
    })
    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        //assertion tugas
        cy.get('img').should('have.attr', 'src', '/resources/img/main_carousel_1.jpg');
        cy.get('h4').should('have.css', 'font-size', '17.5px')
        cy.get('.disclaimer.span12 a').should('have.attr', 'href', 'https://www.microfocus.com/about/legal/#privacy');
    });
});