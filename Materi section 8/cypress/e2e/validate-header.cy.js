describe ('Update users', ()=>{
    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    })
    it('Validate Body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('have.property','abilities')
        cy.get('@pokemon').its('body.abilities').each((ability) => {
            cy.wrap(ability).should('have.property', 'ability')
                .and('have.property', 'name');
        });
        cy.get('@pokemon').its('body.abilities.0.ability.name').should('eq', 'limber');
        cy.get('@pokemon').its('body').should('deep.include', {
          "abilities": [
            {
              "ability": {
                "name": "limber",
                "url": "https://pokeapi.co/api/v2/ability/7/"
              },
              "is_hidden": false,
              "slot": 1
            },
            {
              "ability": {
                "name": "imposter",
                "url": "https://pokeapi.co/api/v2/ability/150/"
              },
              "is_hidden": true,
              "slot": 3
            }
          ]
        });        
        ;
    });
})