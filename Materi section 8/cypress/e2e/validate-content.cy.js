describe ('content',()=>{
    it('validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').then((response) => {
        expect(response.body.abilities[0].ability.name).to.eq('limber')});
        
        cy.get('@pokemon').its('body.abilities[0].ability.url').then((response) => {
        expect(response).to.eq('https://pokeapi.co/api/v2/ability/7/');
        });
    });
})